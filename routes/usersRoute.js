const UsersRouter = require('express').Router()
const UserController = require('../controllers/usersController')

const authenticateUser = async (req, res, next) => {
    //finjimos delay de verificacion
    await setTimeout(() => (console.log('User authenticated')), 3000) 
    next()
}
const loadUser = (req, res, next) => {
    console.log('user was logged');
    next();
} 
UsersRouter.use((req, res, next) => { console.log('llegamos a las rutas del usuario'); next() })
// UsersRouter.use(authenticateUser);
// UsersRouter.use(loadUser); 

UsersRouter.get('/', (req, res) => res.send('ruta de usuarios'))
UsersRouter.get('/:id');
UsersRouter.post('/:id', UserController);

UsersRouter.post('/:id', ()=> UserController)

module.exports = UsersRouter