const http = require('http')
const app = require('./app.js')
const port = process.env.PORT || 2000
const server = http.createServer(app)
server.listen(port, () => console.log(`running server on port ${port}`))