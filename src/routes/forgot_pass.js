require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const bcrypt = require('bcryptjs')
var nodemailer = require('nodemailer')
const { find_username, find_email, update_by_username, update_by_email, all } = require('../model/forgot_pass')

// RANDOM PASS GENERATOR
let length = 8
let newPassword = ''
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let charactersLength = characters.length;
for (let i = 0; i < length; i++) {
    newPassword += characters.charAt(Math.floor(Math.random() * charactersLength))
}


// INPUT EMAIL/USERNAME
router.put('/', (req, res) => {
    const { email, username } = req.body
    if (email) {
        mysql.execute(find_email, [email],
            (err, result, field) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else if (result.length === 0) {
                    res.send({
                        succes: false,
                        msg: 'Email not Found'
                    })
                } else {
                    encrypt = bcrypt.hashSync(newPassword)
                    mysql.execute(update_by_email, [encrypt, email],
                        (err1, result1, field1) => {
                            if (err1) {
                                console.log(err1)
                                res.send({
                                    status: 400,
                                    msg: err1,
                                })
                            } else {
                                const email = result[0].email
                                var transporter = nodemailer.createTransport({
                                    service: 'gmail',
                                    auth: {
                                        user: 'vinsmoke26041997@gmail.com',
                                        pass: '26april1997'
                                    }
                                })

                                var mailOptions = {
                                    from: 'noreply.windy@yopmail.com',
                                    to: email,
                                    subject: '<No Reply>',
                                    text: 'your new password is ' + newPassword
                                };

                                transporter.sendMail(mailOptions, (err, info) => {
                                    if (err) {
                                        throw err
                                    } else {
                                        console.log('Email sent: ' + info.response);
                                        res.send({
                                            succes: true,
                                            msg: 'check your email'
                                        })
                                    }
                                })

                            }
                        }
                    )
                }
            }
        )
    } else if (username) {
        mysql.execute(find_username, [username],
            (err, result, field) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else if (result.length === 0) {
                    res.send({
                        succes: false,
                        msg: 'Username not Found'
                    })
                } else {
                    encrypt = bcrypt.hashSync(newPassword)
                    mysql.execute(update_by_username, [encrypt, username],
                        (err1, result1, field1) => {
                            if (err1) {
                                console.log(err1)
                                res.send({
                                    status: 400,
                                    msg: err1,
                                })
                            } else {
                                const email = result[0].email
                                var transporter = nodemailer.createTransport({
                                    service: 'gmail',
                                    auth: {
                                        user: 'vinsmoke26041997@gmail.com',
                                        pass: '26april1997'
                                    }
                                })

                                var mailOptions = {
                                    from: 'noreply.windy@yopmail.com',
                                    to: email,
                                    subject: '<No Reply>',
                                    text: 'your new password is ' + newPassword
                                };

                                transporter.sendMail(mailOptions, (err, info) => {
                                    if (err) {
                                        console.log(err)
                                        res.send(err)
                                    } else {
                                        console.log('Email sent: ' + info.response);
                                        res.send({
                                            succes: true,
                                            msg: 'check your email'
                                        })
                                    }
                                })

                            }
                        }
                    )
                }
            }
        )
    } else {
        res.send('please provide username/email')
    }
    // mysql.execute(add, [],
    //     (err, result, rows, field) => {
    //         if (err) {
    //             console.log(err)
    //             res.send(err)
    //         } else {
    //             res.send({ succes: true, data: result })
    //         }
    //     }
    // )
})

// /* detail all rooms */
// router.get('/', (req, res) => {

//     mysql.execute(all, [], (err, result, field) => {
//         if (err) {
//             console.log(err)
//             res.send(err)
//         } else {
//             res.send({ succes: true, data: result })
//         }
//     })
// })


// /* detail room */
// router.get('/:id', (req, res) => {
//     const { id } = req.params
//     mysql.execute(detail, [id], (err, result, field) => {
//         if (err) {
//             console.log(err)
//             res.send(err)
//         } else {
//             res.send({ succes: true, data: result[0] })
//         }
//     })
// })


// /**edit room */
// router.put('/:id', (req, res) => {
//     const { id } = req.params
//     const { rooms_type_id, hotel_id, price } = req.body
//     const updated_on = new Date()
//     mysql.execute(edit, [rooms_type_id, hotel_id, price, images, updated_on, id], (err, result, field) => {
//         if (err) {
//             console.log(err)
//             res.send(err)
//         } else {
//             res.send({ succes: true, data: result })
//         }
//     }
//     )
// })

// /** delete Hotel */
// router.delete('/:id', (req, res) => {
//     const { id } = req.params
//     mysql.execute(dlt, [id], (err, result, field) => {
//         if (err) {
//             console.log(err)
//             res.send(err)
//         } else {
//             res.send({ succes: true, data: result })
//         }
//     })
// })


module.exports = router 