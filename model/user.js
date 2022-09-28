// funcionando 100%
const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema ({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel