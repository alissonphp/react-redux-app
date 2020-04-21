const port = 3000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')
const queryInt = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryInt())

server.listen(port, () => {
    console.log(`Server api running on http://localhost:${port}`)
})

module.exports = server