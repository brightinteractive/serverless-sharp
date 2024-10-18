import * as axios from 'axios'

export const apply = async (image, edits) => {
  if (edits.blend.processedValue) {
    await blend(image, edits.blend.processedValue)
  }
}

/**
 *
 * @param {Sharp} image
 * @param {String} url
 */
export const blend = async (image, url) => {
  const compositeInput = (await axios({
    url: url,
    responseType: "arraybuffer"
  })).data;

  image.composite([{input: compositeInput, tile: true}])
}
