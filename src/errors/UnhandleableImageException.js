module.exports = class UnhandleableImageException extends Error {
  constructor (message) {
    super()
    this.name = 'UnhandleableImageException'
    this.status = 500
    this.message = message
  }
}
