require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const { balance_left, add, edit } = require('../model/balance')

// CREAT BALANCE FOR 1ST TIME
router.post('/', auth, (req, res) => {
    const jwt_token = req.headers['authorization'].substr(7)
    const decoded = jwt.verify(jwt_token, process.env.APP_KEY)
    const { balance } = req.body
    const created_on = new Date()
    const updated_on = new Date()
    console.log(decoded.id)
    mysql.execute(add, [decoded.id, balance, created_on, updated_on],
        (err, result, rows, field) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else {
                console.log(field)
                res.send({ succes: true, data: result })
            }
        }
    )
})

// EDIT BALANCE (TOPUP, USED BALANCE)
router.put('/', auth, (req, res) => {
    const jwt_token = req.headers['authorization'].substr(7)
    const decoded = jwt.verify(jwt_token, process.env.APP_KEY)
    const { balance } = req.body
    const updated_on = new Date()
    mysql.execute(edit, [balance, updated_on, decoded.id], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({ succes: true, data: result })
        }
    }
    )
})

// GET BALANCE INFO FOR DESIGNATED USER ID
router.get('/', auth, (req, res) => {
    const jwt_token = req.headers['authorization'].substr(7)
    const decoded = jwt.verify(jwt_token, process.env.APP_KEY)

    mysql.execute(balance_left, [decoded.id], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({ succes: true, data: result })
        }
    })
})


module.exports = router 