const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    nickName: String,
    email: String,
    password: Number
})

module.exports = mongoose.model('User', userSchema)