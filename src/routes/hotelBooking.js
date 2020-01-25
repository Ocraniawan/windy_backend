require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const { detail, add, dlt, edit } = require('../model/hotelBooking')
const { balance_left } = require('../model/balance')
const editBalance = require('../model/balance').edit


// ADD Rooms
router.post('/', auth, (req, res) => {
    const { user_id, rooms_id, duration } = req.body
    const is_booked = 0
    const created_on = new Date()
    const updated_on = new Date()
    // console.log(rooms_type_id, req.files.originalname)
    mysql.execute(add, [user_id, rooms_id, duration, is_booked, created_on, updated_on],
        (err, result, rows, field) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else {
                res.send({ succes: true, data: result })
            }
        }
    )
})


/* detail room */
router.get('/:id', auth, (req, res) => {
    const { id } = req.params
    mysql.execute(detail, [id], (err, result, field) => {
        if (err) {
            console.log(err)
        } else {
            res.send({ succes: true, data: result })
        }
    })
})


/**check out room */
router.put('/checkout', auth, (req, res) => {
    const { user_id, book_id } = req.query
    const { total } = req.body
    const is_booked = 1
    const updated_on = new Date()
    // IF BALANCE = 0, DONT MAKE A BOOK
    // REDUCE BALANCE FROM USER'S BALANCE WITH total. CHANGE is_booked STATUS WITH 1
    mysql.execute(balance_left, [user_id], (err1, res1, field1) => {
        if (err1) {
            console.log(err1)
            res.send({
                status: 400,
                msg: err1,
            })
        } else {
            // res.send(res1)
            if (res1[0].balance < total) {
                res.send({
                    status: 200,
                    msg: "insufficient balance! please refill first"
                })
            } else {
                const new_balance = Number(res1[0].balance) - Number(total)
                mysql.execute(editBalance, [new_balance, updated_on, user_id], (err2, res2, field2) => {
                    if (err2) {
                        console.log(err2)
                        res.send({
                            status: 400,
                            msg: err2,
                        })
                    } else {
                        mysql.execute(edit, [is_booked, updated_on, book_id], (err, result, field) => {
                            if (err) {
                                console.log(err)
                                res.send({
                                    status: 400,
                                    msg: err,
                                })
                            } else {
                                res.send({
                                    status: 200,
                                    succes: true,
                                    data: result,
                                    msg: "Updating data completed!"
                                })
                            }
                        })
                    }
                })
            }
        }
    })



})


/**update duration*/
router.put('/night/:id', auth, (req, res) => {
    const { id } = req.params
    const { duration } = req.body
    const updated_on = new Date()

    const sql = 'UPDATE hotel_booking SET duration=?,updated_on=? WHERE id=?'
    mysql.execute(sql, [duration, updated_on, id], (err, result, field) => {
        if (err) {
            console.log(err)
        } else {
            res.send({ succes: true, data: result })
        }
    }
    )
})


/** delete Hotel Booking */
router.delete('/:id', auth, (req, res) => {
    const { id } = req.params
    mysql.execute(dlt, [id], (err, result, field) => {
        if (err) {
            console.log(err)
        } else {
            res.send({ succes: true, data: result })
        }
    })
})


module.exports = router 