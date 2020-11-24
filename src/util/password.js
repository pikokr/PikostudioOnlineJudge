const crypto = require('crypto')

module.exports.generateSalt = () => crypto.randomBytes(16).toString('base64')

module.exports.encryptPassword = (pw, salt=module.exports.generateSalt()) => {
}
