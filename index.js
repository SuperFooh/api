require("dotenv").config();
const server = require('./server.js')
const mongoDB = require('./services/initMongoDB')
const sql = require ('./services/initSQL')
const port = process.env.PORT || 2000


sql()
server.listen(port, () => console.log(`running ${process.env.NODE_ENV } web-server on port ${port}`))