require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {auth} = require('./src/resources/middleware')

const user = require('./src/routes/user')
const hotel = require('./src/routes/hotel')
const plane = require('./src/routes/plane')
const rooms = require('./src/routes/rooms')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
// app.use('/src/images',express.static('src/images/item'))
// app.use('/src/images',express.static('src/images/restaurant'))
// app.use('/src/images',express.static('src/images/categories'))

app.use(bodyParser.json())
app.use(cors())
app.use('/user',user)
app.use('/hotel',hotel)
app.use('/plane',plane)
app.use('/rooms',rooms)



const port = process.env.APP_PORT

app.listen(port,()=>{
    console.log('App listen on Port'+ port)
})