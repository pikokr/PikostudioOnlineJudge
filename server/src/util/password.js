"use strict";
exports.__esModule = true;
exports.generate = void 0;
var crypto_1 = require("crypto");
function generate(password, salt) {
    return crypto_1["default"]
        .createHash('md5')
        .update(password + salt)
        .digest('base64')
        .toString();
}
exports.generate = generate;
