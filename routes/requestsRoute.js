const RequestsRouter = require('express').Router()

RequestsRouter.all('/', (req, res, next) => {
    res.send('rutas de requests')
})

module.exports = RequestsRouter