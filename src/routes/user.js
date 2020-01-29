require('dotenv').config()

const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const { login, detail, register, dlt, edit, logout, logged_id, check } = require('../model/user')
const { add } = require('../model/balance')

/**Upload Foto/File */
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/images/user')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter })


// Register User
router.post('/register', upload.single('image'), (req, res) => {
    const { title_id, username, first_name, last_name, phone_number, email, password } = req.body
    console.log(title_id, username, first_name, last_name, phone_number, email, password)

    // DEFAULT IMAGE
    let image = 'coffe.jpg'
    if (req.file) {
        image = (req.file.originalname)
    }

    const enc_pass = bcrypt.hashSync(password)
    const created_on = new Date()
    const updated_on = new Date()

    // CHECK IF USERNAME/ EMAIL ALREADY USED

    mysql.execute(check, [username, email], (err1, res1, field1) => {
        if (err1) {
            console.log(err1)
            res.send({
                status: 400,
                msg: err1,
            })
        } else if (res1.length === 0) {
            mysql.execute(register, [title_id, username, first_name, last_name, phone_number, email, enc_pass, image, created_on, updated_on], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send({ succsess: true, data: result })
                }
            })
        }
        else {
            res.send({
                status: 400,
                msg: 'Username/email already used.',
            })
        }
    })
})

// Login
router.post('/', (req, res) => {
    const { username, password } = req.body

    mysql.execute(login, [username], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            if (result.length > 0) {
                if (bcrypt.compareSync(password, result[0].password)) {
                    const id = result[0].id
                    const auth = jwt.sign({ username, id }, process.env.APP_KEY)
                    const token = auth
                    const is_revoked = 0
                    const created_on = new Date()
                    const updated_on = new Date()
                    const revoked = `INSERT INTO revoked_token (token,is_revoked,created_on,updated_on) VALUES (?,?,?,?)`
                    mysql.execute(revoked, [token, is_revoked, created_on, updated_on], (err1, result1, field) => {
                        if (err1) {
                            console.log(err1)
                            res.send(err1)
                        } else {
                            // BALANCE SET TO 0
                            mysql.execute(detail, [id], (err1, res1, field1) => {
                                if (err1) {
                                    console.log(err1)
                                } else {
                                    // console.log(res1[0].first_login)
                                    if (res1[0].first_login === 0) {
                                        mysql.execute(add, [id, balance = 0, created_on, updated_on],
                                            (err3, res3, field3) => {
                                                if (err3) {
                                                    res.send(err3)
                                                } else {
                                                    mysql.execute(logged_id, [id],
                                                        (err4, res4, field4) => {
                                                            if (err4) {
                                                                console.log(err4)
                                                                res.send(err4)
                                                            } else {
                                                                console.log(res3)
                                                                res.send({
                                                                    succes: true,
                                                                    auth
                                                                })
                                                            }
                                                        }
                                                    )
                                                }
                                            }
                                        )
                                    } else {
                                        res.send({
                                            succes: true,
                                            auth
                                        })
                                    }
                                }
                            })
                        }
                    })
                } else {
                    res.send({
                        succes: false,
                        msg: "Incorret Password"
                    })
                }
            } else {
                res.send({
                    succes: false,
                    msg: "Username Not Found"
                })
            }
        }
    })

})


/**Log Out */
router.get('/', auth, (req, res) => {
    const token = req.headers.auth_token
    mysql.execute(logout, [1, token], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({ success: true, data: result, msg: "Log Out Success" })
        }
    })
})


/* detail user */
router.get('/:id', auth, (req, res) => {
    const { id } = req.params

    mysql.execute(detail, [id], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({ succes: true, data: result[0] })
        }
    })
})

/** delete user */
router.delete('/:id', (req, res) => {
    const { id } = req.params
    mysql.execute(dlt, [id], (err, result, field) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({ succes: true, data: result })
        }
    })
})

/**edit user */
router.put('/', auth, upload.single('image'), (req, res) => {
    const jwt_token = req.headers['authorization'].substr(7)
    const decoded = jwt.verify(jwt_token, process.env.APP_KEY)
    const id = decoded.id
    const { title_id, username, first_name, last_name, phone_number, email, password } = req.body
    const image = (req.file.originalname)
    const enc_pass = bcrypt.hashSync(password)
    const updated_on = new Date()
    mysql.execute(
        edit, [title_id, username, first_name, last_name, phone_number, email, enc_pass, image, updated_on, id], (err, result, field) => {
            if (err) {
                res.send(err)
            } else {
                // END
                res.send({ succes: true, data: result })
            }
        }
    )
})


module.exports = router 