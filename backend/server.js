const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: "config/config.env" })
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5000
const server = http.createServer(app)
// server.get('/', (req, res) => {
//     res.send('Hello World!')
// })

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})