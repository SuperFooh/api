const User = require('../models/UserModel')
const ObjectId = require('mongoose').Types.ObjectId
const 
const UserController = (req, res, next) => {
    
    const { name, nickName, email, rawPassword } = req.body
    const 
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