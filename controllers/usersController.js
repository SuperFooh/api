const User = require('../models/UserModel')
const ObjectId = require('mongoose').Types.ObjectId

const UserController = (req, res, next) => {
    const { name, nickName } = req.body
    return {
        user: new User({
            _id: new ObjectId(),
            name,
            nickName
        })
    }
}

module.exports = UserController