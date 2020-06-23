const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    nickName: String,
})

module.exports = mongoose.model('User', userSchema)