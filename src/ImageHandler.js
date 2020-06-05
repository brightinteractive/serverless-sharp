const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const https = require('https');
const { spawnSync } = require('child_process')

const settings = require('./helpers/settings')
const ImageRequest = require('./ImageRequest')
const imageOps = require('./image-ops')

class ImageHandler {
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
        const pipeline = sharp(originalImageBody).rotate()
        await this.applyEdits(pipeline, this.request.edits)
        await this.applyOptimizations(pipeline)
        bufferImage = await pipeline.toBuffer()
        format = pipeline.options.formatOut
      } catch (err) {
        console.error('Unhandlable image encountered', err)
        bufferImage = Buffer.from(originalImageBody, 'binary')
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
      ContentType: contentType
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
      const request = https.request(destUrl, options, (response) => {
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
      // If the browser supports webp, use webp for everything but gifs
      if (headers && 'Accept' in headers) {
        if (fm !== 'gif' && headers.Accept.indexOf('image/webp') !== -1) {
          fm = 'webp'
        }
      }
    }

    // adjust quality based on file type
    if (fm === 'jpg' || fm === 'jpeg') {
      await image.jpeg({
        quality: quality,
        trellisQuantisation: true
      })
    } else if (fm === 'png') {
      // ensure that we do not reduce quality if param is not given
      if (autoVals.includes('compress') && quality < 100 && edits.q !== undefined) {
        const minQuality = quality - 20 > 0 ? quality - 20 : 0
        const pngQuantOptions = [
          '--speed', settings.getSetting('PNGQUANT_SPEED'),
          '--quality', minQuality + '-' + quality,
          '-' // use stdin
        ]
        const binaryLocation = this.findBin('pngquant')
        if (binaryLocation) {
          const buffer = await image.png({ compressionLevel: 0 }).toBuffer()
          const pngquant = spawnSync(binaryLocation, pngQuantOptions, { input: buffer })
          image = sharp(pngquant.stdout)
        } else {
          console.warn('Skipping pngquant - could not find executable!')
          await image.png({
            quality: quality
          })
        }
      } else {
        await image.png({
          quality: quality
        })
      }
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

  /**
   * TODO: Move me out of here
   * @param binName
   * @returns {string}
   */
  findBin (binName) {
    process.env.PATH = process.env.PATH + ':' + process.env.LAMBDA_TASK_ROOT
    const binPath = path.resolve('./bin/', process.platform, binName)

    if (!fs.existsSync(binPath)) {
      console.warn('Supposedly could not find binPath, continue anyway.')
    }
    return binPath
  }
}

// Exports
module.exports = ImageHandler
