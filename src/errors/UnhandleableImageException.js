module.exports = class UnhandleableImageException extends Error {
  constructor (message) {
    super()
    this.name = 'UnhadleableImageException'
    this.status = 500
    this.message = message
  }
}
