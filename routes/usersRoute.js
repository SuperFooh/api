const UsersRouter = require('express').Router()
const UserController = require('../controllers/usersController')

UsersRouter.param('userID', (req, res, next, userID) => {
    req.userID = userID;
    next();
})

UsersRouter.route('/:userID')
    .get((req,res,next) => UserController.getUser(req,res,next))
    .post((req, res, next) => UserController.setUser(req, res, next))
    .delete((req, res, next) => UserController.setUser(req, res, next))
    .patch((req, res, next) => UserController.updateUser(req, res, next))

UsersRouter.get('/', (req, res,next) => UserController.getAllUsers(req,res,next))

module.exports = UsersRouter