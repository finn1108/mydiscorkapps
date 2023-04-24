const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const authRoute = require('./routes/auth')

dotenv.config({ path: "config/config.env" })
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5000

app.use('/api/v1', authRoute)



const server = http.createServer(app)

//connect db
mongoose
    .connect(process.env.DB_URI)
    .then(() => {
        server.listen(port, () => {
            console.log(`DB connected ...App listening on port ${port}`)
        })
    })
    .catch((err) => {
        console.log("Database connected failed. Server is shutting down!")
    })