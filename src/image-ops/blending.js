const axios = require('axios')
const sharp = require('sharp')
const sizeOf = require('buffer-image-size')

exports.apply = async (image, edits) => {
  await this.beforeApply(image, edits)
  const { blend, w, h, fit } = edits
  const blendAlign = edits["blend-align"]
  const blendAlpha = edits["blend-alpha"]
  const blendRatio = edits["blend-ratio"]
  console.log("RATIO: "+blendRatio)

  if (blend.processedValue) {
    await this.blend(
        image,
        blend.processedValue,
        blendAlign.processedValue,
        blendAlpha.processedValue,
        {width: w.processedValue, height: h.processedValue},
        fit,
        blendRatio.processedValue
    )
  }
}

/**
 *
 * @param {Sharp} image
 * @param {String} url
 * @param {String} gravity
 * @param {number} alpha
 * @param {Object} targetDimensions
 * @param {String} targetFit
 * @param {number} ratio
 **/
exports.blend = async (image, url, gravity, alpha, targetDimensions, targetFit, ratio) => {
  let compositeImage = (await axios({
    url: url,
    responseType: "arraybuffer"
  })).data;

  if (alpha >= 0) {
    console.log("APPLYING OPACITY TO WATERMARK: "+alpha)
    compositeImage = await sharp(compositeImage).composite(
        [{
          input: Buffer.from([0,0,0,Math.round(alpha*256)]),
          raw: {
            width: 1,
            height: 1,
            channels: 4,
          },
          tile: true,
          blend: 'dest-in',
        }]
    ).toBuffer()
  }

  if (ratio > 0) {
    const compositeDimensions = calculateCompositeDimensions(targetDimensions, targetFit, ratio)
    console.log("ADJUSTING WATERMARK IMAGE TO DIMENSIONS: "+JSON.stringify(compositeDimensions))
    compositeImage = await sharp(compositeImage).resize(compositeDimensions.width, compositeDimensions.height, {fit: "inside"}).toBuffer()
  }

  image.composite([{input: compositeImage, tile: false, gravity: gravity}])
}

function calculateCompositeDimensions (image, targetDimensions, targetFit, ratio) {
  const originalDimensions = sizeOf(image)
  let resultDimensions
  if (targetFit) {
    if (targetFit === "fill") {
      //https://docs.imgix.com/apis/rendering/size/resize-fit-mode#fill
      resultDimensions = targetDimensions
    } else if (targetFit === "max") {
      //https://docs.imgix.com/apis/rendering/size/resize-fit-mode#max
      resultDimensions = calculateResultDimensions(originalDimensions, targetDimensions, false)
    } else if (targetFit === "clip") {
      //https://docs.imgix.com/apis/rendering/size/resize-fit-mode#clip
      resultDimensions = calculateResultDimensions(originalDimensions, targetDimensions, true)
    }
  } else {
    resultDimensions = originalDimensions
  }
  return {width: resultDimensions.width * ratio, height: resultDimensions.height * ratio}
}

function calculateResultDimensions(originalDimensions, targetDimensions, allowUpscaling) {
  const originalAspectRatio = originalDimensions.width / originalDimensions.height;
  const targetAspectRatio = targetDimensions.width / targetDimensions.height;

  let resultWidth, resultHeight;

  if (originalAspectRatio > targetAspectRatio) {
    // The original image is wider compared to the target aspect ratio
    resultWidth = targetDimensions.width;
    resultHeight = Math.floor(targetDimensions.width / originalAspectRatio);
  } else {
    // The original image is taller compared to the target aspect ratio
    resultHeight = targetDimensions.height;
    resultWidth = Math.floor(targetDimensions.height * originalAspectRatio);
  }

  if (!allowUpscaling && (resultWidth > originalDimensions.width || resultHeight > originalDimensions.height))
  {
    resultWidth = originalDimensions.width;
    resultHeight = originalDimensions.height;
  }

  return { width: resultWidth, height: resultHeight };
}


const alignmentToGravity = new Map([
  ["center", "centre"], ["middle", "centre"], ["center,middle", "centre"], ["middle,center", "centre"],
  ["left", "west"], ["left,middle", "west"], ["middle,left", "west"],
  ["right", "east"], ["right,middle", "east"], ["middle,right", "east"],
  ["top", "north"], ["top,middle", "north"], ["middle,top", "north"],
  ["top,left", "northwest"], ["left,top", "northwest"],
  ["top,right", "northeast"], ["right,top", "northeast"],
  ["bottom", "south"], ["bottom,middle", "south"], ["middle,bottom", "south"],
  ["bottom,left", "southwest"], ["left,bottom", "southwest"],
  ["bottom,right", "southeast"], ["right,bottom", "southeast"],
])

exports.beforeApply = async function (image, edits) {
  const blendAlign = edits["blend-align"]
  const blendAlpha = edits["blend-alpha"]
  const blendRatio = edits["blend-ratio"]

  const alignment = blendAlign.processedValue.join(",")
  if (alignment) {
    const gravity = alignmentToGravity.get(alignment)
    blendAlign.processedValue = gravity ? gravity : "centre"
  }

  blendAlpha.processedValue = percentageAsDecimal(blendAlpha.processedValue);
  blendRatio.processedValue = 0.5 //percentageAsDecimal(blendRatio.processedValue);
}

function percentageAsDecimal(percentageValue) {
  if (percentageValue) {
    return parseFloat(percentageValue) / 100
  }
  return -1
}