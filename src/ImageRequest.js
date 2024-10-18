import * as eventParser from './helpers/eventParser.js'
import * as schemaParser from './helpers/schemaParser.js'
import * as security from './helpers/security.js'
import Sharp from 'sharp'
import { HashException } from './errors/HashException.js'
import * as settings from './helpers/settings.js'
import { S3Exception } from './errors/S3Exception.js'
import { ImageDownloadException } from './errors/ImageDownloadException.js'
import * as https from 'https'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'

export class ImageRequest {
  constructor (event) {
    this.event = event
    // If the hash isn't set when it should be, we'll throw an error.
    if (settings.getSetting('SECURITY_KEY')) {
      this.checkHash()
    }

    const { bucket, prefix } = eventParser.processSourceBucket(settings.getSetting('SOURCE_BUCKET'))
    this.bucket = bucket
    this.prefix = prefix
    this.key = eventParser.parseImageKey(event.path, prefix)
  }

  /**
   * This method does a number of async things, such as getting the image object and building a schema
   * @return {Promise<void>}
   */
  async process () {
    let qp = this._parseQueryParams()

    this.sourceUrl = qp.source || undefined
    this.destUrl = qp.dest || undefined

    this.originalImageObject = await this.getOriginalImage(this.sourceUrl)
    this.originalImageBody = this.originalImageObject.Body
    this.originalImageSize = this.originalImageObject.ContentLength

    qp = await this._inferOutputFormatQp(qp)

    this.schema = schemaParser.getSchemaForQueryParams(qp)
    this.edits = schemaParser.normalizeAndValidateSchema(this.schema, qp)
    this.headers = this.event.headers
  }

  /**
   * Gets the original image either from an Amazon S3 bucket or a signed S3 URL.
   * @param {String} sourceUrl - The original image URL (if any).
   * @return {Promise} - The original image or an error.
   */
  async getOriginalImage (sourceUrl) {
    if (sourceUrl) {
      return this.getOriginalImageFromUrl(sourceUrl)
    } else {
      return this.getOriginalImageFromS3()
    }
  }

  async getOriginalImageFromUrl(sourceUrl) {
    return new Promise((resolve, reject) => {
      const request = https.get(new URL(sourceUrl), (res) => {
        let contentBuffer = []
        let totalBytesInBuffer = 0
        res.on('data', (chunk) => {
          contentBuffer.push(chunk)
          totalBytesInBuffer += chunk.length
        });
        res.on('end', () => {
          if(res.statusCode === 200) {
            resolve({
              Body: Buffer.concat(contentBuffer, totalBytesInBuffer),
              ContentType: res.headers["content-type"],
              CacheControl: res.headers["cache-control"]
            })
          } else {
            reject(new ImageDownloadException(res.statusCode, res.statusMessage))
          }
        })
      })
      request.on('error', function (e) {
        console.error('Error while downloading source image: ' + e.message);
        reject(e);
      });
      request.end();
    })
  }

  async getOriginalImageFromS3() {
    const s3 = new S3Client()
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: decodeURIComponent(this.key)
    })
    try {
      const response = await s3.send(command)
      return {
        ...response,
        Body: await response.Body.transformToByteArray()
      }
    } catch (err) {
      const error = new S3Exception(err.statusCode, err.code, err.message)
      return Promise.reject(error)
    }
  }

  /**
   * Parses the name of the appropriate Amazon S3 key corresponding to the
   * original image.
   * @param {Object} event - Lambda request body.
   */
  checkHash () {
    const { queryStringParameters, path } = this.event
    if (queryStringParameters && queryStringParameters.s === undefined) {
      throw new HashException()
    }
    if (queryStringParameters) {
      const hash = queryStringParameters.s
      const isValid = security.verifyHash(path, queryStringParameters, hash)
      if (!isValid) {
        throw new HashException()
      }
    }
    return true
  }

  /**
   * Decodes the image request path associated with default
   * image requests. Provides error handling for invalid or undefined path values.
   * @param {Object} event - The proxied request object.
   */
  _parseQueryParams () {
    let qp = this.event.queryStringParameters
    if (!qp) {
      qp = {}
    }
    return schemaParser.replaceAliases(qp)
  }

  /**
   * We need to set an output format if one isn't provided. This is necessary to ensure our dependencies are correctly
   * computed.
   * @param qp
   * @return {*}
   * @private
   */
  async _inferOutputFormatQp (qp) {
    // One is already defined, let's roll with it. Also, use jpg not jpeg (cuz imgix)
    if (qp.fm !== undefined) {
      if (qp.fm === 'jpeg') {
        qp.fm = 'jpg'
      } else {
        qp.fm = qp.fm.toLowerCase()
      }
      return qp
    }
    const image = Sharp(this.originalImageBody)
    const metadata = await image.metadata()
    qp.fm = metadata.format.toLowerCase() === 'jpeg' ? 'jpg' : metadata.format.toLowerCase()
    return qp
  }
}
