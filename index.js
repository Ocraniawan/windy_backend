require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {auth} = require('./src/resources/middleware')

const user = require('./src/routes/user')
const hotel = require('./src/routes/hotel')
const plane = require('./src/routes/plane')
const rooms = require('./src/routes/rooms')
const balance = require('./src/routes/balance')
const forgot_pass = require('./src/routes/forgot_pass')
const hotel_booking = require('./src/routes/hotelBooking')
const hotel_booking_history = require('./src/routes/hotel_booking_history')

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
app.use('/balance',balance)
app.use('/forgot_pass',forgot_pass)
app.use('/hotel_booking',hotel_booking)
app.use('/hotel_booking_history',hotel_booking_history)



const port = process.env.APP_PORT

app.listen(port,()=>{
    console.log('App listen on Port '+ port)
})