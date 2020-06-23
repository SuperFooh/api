const RequestsRouter = require('express').Router()

RequestsRouter.all('/', (req, res) => {
    res.send('rutas de requests')
})

module.exports = RequestsRouter