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
    const colour = {r: 10, g: 10, b: 10, a: alpha}
    inputImage = {...inputImage, create: {background: colour}}
  }

  image.composite([inputImage])
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
  const { blendalign, blendalpha } = edits

  const alignment = blendalign.processedValue.replace(/ /g, "")
  if (alignment) {
    const gravity = alignmentToGravity.get(alignment)
    blendalign.processedValue = gravity ? gravity : "centre"
  }

  if (blendalpha.processedValue) {
    const alphaAsDecimal = parseFloat(blendalpha.processedValue) / 100
    blendalpha.processedValue = alphaAsDecimal
  } else {
    blendalpha.processedValue = -1
  }
}