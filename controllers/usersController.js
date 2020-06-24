const User = require('../models/UserModel')
const ObjectId = require('mongoose').Types.ObjectId

const UserController = (req, res, next) => {
    
    const { name, nickName, email, rawPassword } = req.body

    setUser: () => {
        new User({
            _id: new ObjectId(),
            name,
            nickName,
            email,
            passWord,
        })
    }
}

module.exports = UserController