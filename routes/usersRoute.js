const UsersRouter = require('express').Router()
const UserController = require('../controllers/usersController')

UsersRouter.use((req, res, next) => { console.log('llegamos a las rutas del usuario'); next() })


UsersRouter.get('/', (req, res) => res.send('ruta de usuarios'))
UsersRouter.get('/:id');
UsersRouter.post('/', UserController.setUser);

module.exports = UsersRouter