require("dotenv").config();
const server = require('./server.js')
const mongoDB = require('./services/database/initMongoDB')

const port = process.env.PORT || 2000

server.listen(port, () => console.log(`running ${process.NODE_ENV } web-server on port ${port}`))