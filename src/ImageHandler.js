import Sharp from 'sharp'
import * as https from 'https'
import * as settings from './helpers/settings.js'
import { ImageRequest } from './ImageRequest.js'
import * as imageOps from './image-ops/index.js'
import { UnhandleableImageException } from './errors/UnhandleableImageException.js'

export class ImageHandler {
  /**
   * @param {ImageRequest} request
   */
  constructor (request) {
    if (!(request instanceof ImageRequest)) {
      throw new Error('Expected request of type ImageRequest')
    }
    if (!request.originalImageObject) {
      throw new Error('Image not found or request not fully processed!')
    }
    this.request = request
  }

  /**
   * Main method for processing image requests and outputting modified images.
   */
  async process () {
    // Get the original image
    const originalImageObject = this.request.originalImageObject
    const originalImageBody = this.request.originalImageBody

    let contentType = originalImageObject.ContentType

    let format
    let bufferImage
    // We have some edits to process
    if (Object.keys(this.request.edits).length) {
      try {
        // We're calling rotate on this immediately in order to ensure metadata for rotation doesn't get lost
        const pipeline = Sharp(originalImageBody).rotate()
        await this.applyEdits(pipeline, this.request.edits)
        await this.applyOptimizations(pipeline)
        bufferImage = await pipeline.toBuffer()
        format = pipeline.options.formatOut
      } catch (err) {
        throw new UnhandleableImageException('Unhandlable image encountered: ' + err.message)
      }
    } else {
      // No edits, just return the original
      bufferImage = Buffer.from(originalImageBody, 'binary')
    }
    if (format) {
      switch (format.toLowerCase()) {
        case 'jpeg':
        case 'jpg':
          contentType = 'image/jpeg'
          break
        case 'png':
          contentType = 'image/png'
          break
        case 'webp':
          contentType = 'image/webp'
          break
        case 'gif':
          contentType = 'image/gif'
          break
        case 'input':
          break
        default:
          console.warn('Unexpected output content type encountered: ' + contentType)
      }
    }

    const uploadStatusCode = this.request.destUrl ? await this.uploadImage(this.request.destUrl, bufferImage, contentType) : undefined;

    return {
      CacheControl: originalImageObject.CacheControl,
      Body: this.shouldReturnEmptyBody(uploadStatusCode) ? "" : bufferImage.toString('base64'),
      ContentType: contentType,
      ContentLength: Buffer.byteLength(bufferImage, 'base64')
    }
  }

  shouldReturnEmptyBody(uploadResult) {
    return uploadResult === 200;
  }

  async uploadImage(destUrl, bufferImage, contentType) {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': contentType,
          'Content-Length': Buffer.byteLength(bufferImage)
        }
      };
      const request = https.request(new URL(destUrl), options, (response) => {
        resolve(response.statusCode);
      });
      request.on('error', function (e) {
        console.error('Error while uploading image: ' + e.message);
        reject(e);
      });
      request.write(bufferImage);
      request.end();
    });
  }

  /**
   * Applies image modifications to the original image based on edits
   * specified in the ImageRequest.
   * @param {sharp} originalImage - The original image.
   * @param {Object} edits - The edits to be made to the original image.
   */
  async applyEdits (image, edits) {
    await imageOps.restrictSize(image, await image.metadata())
    await imageOps.apply(image, edits)
  }

  /**
   * TODO: Move me out of here
   * @param image
   * @param edits
   * @param headers
   * @returns {Promise<Sharp>}
   */
  async applyOptimizations (image) {
    // const minColors = 128 // arbitrary number
    // const maxColors = 256 * 256 * 256 // max colors in RGB color space
    const { edits, headers } = this.request
    const { auto } = edits

    let autoVals = auto.processedValue
    if (!Array.isArray(autoVals)) {
      autoVals = []
    }

    // Determine our quality - if it was implicitly determined, we'll use the environment setting rather than the schema
    let quality = settings.getSetting('DEFAULT_QUALITY')
    if (edits.q.implicit !== true) {
      quality = parseInt(edits.q.processedValue)
      if (quality < 1) {
        quality = 1
      } else if (quality > 100) {
        quality = 100
      }
    }

    // Get the image metadata and the initial format
    const metadata = await image.metadata()
    let fm = edits.fm.processedValue
    if (fm === null) {
      fm = metadata.format
    }

    if (autoVals.includes('compress')) {
      quality = settings.getSetting('DEFAULT_COMPRESS_QUALITY')
      if (!metadata.hasAlpha && (fm === 'png' || fm === 'tiff')) {
        fm = 'jpeg'
      } else if (metadata.hasAlpha && fm === 'png') {
        fm = 'png'
      }
    }

    if (autoVals.includes('format')) {
      if (headers && 'Accept' in headers && fm !== 'gif' && fm !== 'svg') {
        // If the browser supports webp, use webp for everything but gifs and svgs
        if (headers.Accept.indexOf('image/webp') !== -1) {
          fm = 'webp'
        }
      }
    }

    // adjust quality based on file type
    if (fm === 'jpg' || fm === 'jpeg') {
      if (autoVals.includes('compress') && quality < 100 && edits.q !== undefined) {
        await image.jpeg({
          quality: quality,
          mozjpeg: true
        })
      } else {
        await image.flatten({background: {r:255,g:255,b:255}}).jpeg({
          quality: quality,
          trellisQuantisation: true
        })
      }
    } else if (fm === 'png') {
        await image.png({
          quality: quality
        })
    } else if (fm === 'webp') {
      const options = {
        quality: quality
      }
      if ('lossless' in edits && edits.lossless === 'true') {
        options.lossless = true
      }
      await image.webp(options)
    } else {
      await image.toFormat(edits.fm)
    }

    return image
  }
}
