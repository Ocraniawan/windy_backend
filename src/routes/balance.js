require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const { balance_left, add, edit } = require('../model/balance')


// EDIT BALANCE (TOPUP, USED BALANCE)
router.put('/:id', auth, (req, res) => {
    const {id} = req.params
    const { balance } = req.body
    const updated_on = new Date()
    mysql.execute(edit, [balance, updated_on, id], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            // res.send({ succes: true, data: result })
            mysql.execute(balance_left, [id], (err2, res2, field2)=>{
                if (err2) {
                    console.log(err2)
                    res.send({
                        status: 400,
                        msg: err2,
                    })
                } else {
                    res.send({
                        succes: true,
                        status: 200,
                        data: res2
                    })
                }
            })
        }
    }
    )
})

// GET BALANCE INFO FOR DESIGNATED USER ID
router.get('/:id', auth, (req, res) => {
    const {id} = req.params
    mysql.execute(balance_left, [id], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({ succes: true, data: result })
        }
    })
})


module.exports = router 