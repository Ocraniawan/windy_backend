require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const { booked, not_booked } = require('../model/hotel_booking_history')


/* GET HISTORY (BOOKED) BY USER ID */
router.get('/booked/:id', auth, (req, res) => {
    const user_id = req.params.id

    mysql.execute(booked, [user_id], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send({
                status: 400,
                msg: err,
            })
        } else if (result.length === 0) {
            res.send({
                status: 400,
                msg: "No data retrieved!",
            })
        } else {
            res.send({
                status: 200,
                data: result
            })
        }
    })
})

/* GET HISTORY (NOT BOOKED YET) BY USER ID */
router.get('/not_booked/:id', auth, (req, res) => {
    const user_id = req.params.id

    mysql.execute(not_booked, [user_id], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send({
                status: 400,
                msg: err,
            })
        } else if (result.length === 0) {
            res.send({
                status: 400,
                msg: "No data retrieved!",
            })
        } else {
            res.send({
                status: 200,
                data: result
            })
        }
    })
})


module.exports = router 