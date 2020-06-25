const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    // enterpriseID: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    nickName: String,
    email: String,
    password: Number
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)