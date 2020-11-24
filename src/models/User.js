const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
})

userSchema.methods.comparePw = function (pw, cb) {
    if (pw === this.password) {
        cb(null, true)
    } else {
        cb('password does not match')
    }
}
