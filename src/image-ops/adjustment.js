/**
 * This file should be used for processes that involve adjusting colors in the image.
 */

/**
 * Applies all of the adjustment edits to the image
 * @param image
 * @param edits
 */
export const apply = (image, edits) => {
  if (edits.bri) {
    bri(image, edits.bri.processedValue)
  }
  if (edits.sharp) {
    sharp(image)
  }
}

/**
 *
 * @param {Sharp} image
 * @param {number} val
 */
export const bri = (image, val) => {
  // TODO: This is wrong! Brightness in imgix is -200-200 for SOME REASON??
  // Also, it doesn't scale nicely to Sharp. Sharp doesn't go completely black
  image.modulate({
    brightness: val
  })
}

/**
 *
 * @param {Sharp} image
 */
export const sharp = (image) => {
  image.sharpen()
}
