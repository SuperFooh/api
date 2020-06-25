require("dotenv").config();
const server = require('./server.js')
const port = process.env.PORT || 2000
const mongoDB = require('./services/database/initMongoDB') 

server.listen(port, () => console.log(`running ${process.env.PORT } web-server on port ${port}`))