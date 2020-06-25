const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/UserModel')
require('../services/database/initMongoDB')

exports.setUser = (req, res, next) => {
    const { name, nickName, email, passWord } = req.body
    const user = new User({
        _id: new ObjectId(),
        name,
        nickName,
        email,
        passWord,
    })
    console.log('user', user);
    
    user.save().exec()
        .then(result => {
            console.log(result);
            res.status(201).json({
                'message': 'User created',
                'user': result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            })
        })
}

exports.getUser = (req, res, next) => {
    const { userID } = req.body
    User.findById()
}