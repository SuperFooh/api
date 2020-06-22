const UsersRouter = require('express').Router()

UsersRouter.all('/', (req, res) => {
    res.send('rutas de Users')
})

module.exports = UsersRouter