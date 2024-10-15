const axios = require('axios')

exports.apply = async (image, edits) => {
  await this.beforeApply(image, edits)
  const { blend, blendalign, blendalpha } = edits

  if (blend.processedValue) {
    await this.blend(image, blend.processedValue, blendalign.processedValue, blendalpha.processedValue)
  }
}

/**
 *
 * @param {Sharp} image
 * @param {String} url
 * @param {String} gravity
 * @param {number} alpha
 **/
exports.blend = async (image, url, gravity, alpha) => {
  const compositeInput = (await axios({
    url: url,
    responseType: "arraybuffer"
  })).data;

  let inputImage = {input: compositeInput, tile: false, gravity: gravity}

  if (alpha >= 0) {
    colour = {r: 10, g: 10, b: 10, a: alpha}
    inputImage = {...inputImage, create: {background: colour}}
  }

  image.composite([inputImage])
}

exports.beforeApply = async function (image, edits) {
  const { blendalign, blendalpha } = edits

  const alignment = blendAlign.processedValue
  if (alignment) {
    switch (alignment) {
      case 'center,middle' || 'middle,center':
        blendalign.processedValue = 'centre'
        break
      case 'left,middle' || 'middle,left':
        blendalign.processedValue = 'west'
        break
      case 'right,middle' || 'middle,right':
        blendalign.processedValue = 'east'
        break
      case 'top,middle' || 'middle,top':
        blendalign.processedValue = 'north'
        break
      case 'top,left' || 'left,top':
        blendalign.processedValue = 'northwest'
        break
      case 'top,right' || 'right,top':
        blendalign.processedValue = 'northeast'
        break
      case 'bottom,middle' || 'middle,bottom':
        blendalign.processedValue = 'south'
        break
      case 'bottom,left' || 'left,bottom':
        blendalign.processedValue = 'southwest'
        break
      case 'bottom,right' || 'right,bottom':
        blendalign.processedValue = 'southeast'
        break
      default:
        blendalign.processedValue = 'centre'
        console.error('Invalid blending alignment: ' + alignment)
    }

    if (blendalpha.processedValue) {
      const alphaAsDecimal = parseFloat(blendalpha.processedValue) / 100
      blendalpha.processedValue = alphaAsDecimal
    } else {
      blendalpha.processedValue = -1
    }
  }
}