const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    nickName: String,
    email: String,
    password: Number
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)