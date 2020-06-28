const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/UserModel')
require('../services/initMongoDB')

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
    
    user.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                'message': 'User created',
                'user': result
            })
            res.send()
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            })
            res.send()
        })
}

exports.updateUser = (req,res,next) => {
    res.send({msg : `${req.userID}`})
}

exports.getUser = (req, res, next) => {
    const { userID } = req.body
    User.findById()

}

exports.getAllUsers = (req, res, next) => {
    try {
        // const users = User.find()
        console.log("llegamos aca");
        res.json({ "message": "ok" })
    } catch (error) {
        next(error)
    }
} 