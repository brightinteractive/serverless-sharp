const axios = require('axios')
const sharp = require('sharp')

exports.apply = async (image, edits) => {
  await this.beforeApply(image, edits)
  const { blend } = edits
  const blendalign = edits["blend-align"]
  const blendalpha = edits["blend-alpha"]
  const blendwidth = edits["blend-w"]
  const blendheight = edits["blend-h"]

  if (blend.processedValue) {
    await this.blend(image, blend.processedValue, blendalign.processedValue, blendalpha.processedValue, blendwidth.processedValue, blendheight.processedValue)
  }
}

/**
 *
 * @param {Sharp} image
 * @param {String} url
 * @param {String} gravity
 * @param {number} alpha
 * @param {number} width
 * @param {number} height
 **/
exports.blend = async (image, url, gravity, alpha, width, height) => {
  let compositeImage = (await axios({
    url: url,
    responseType: "arraybuffer"
  })).data;

  if (alpha >= 0) {
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

  image.composite([{input: compositeImage, tile: false, gravity: gravity}])
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
  const blendalign = edits["blend-align"]
  const blendalpha = edits["blend-alpha"]

  const alignment = blendalign.processedValue.join(",")
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