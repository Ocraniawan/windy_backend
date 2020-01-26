require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const { detail, add, dlt, edit, all } = require('../model/hotel')
const url = process.env.APP_URI;


/**Upload Foto/File */
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/images/hotel')
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

// ADD HOTEL
router.post('/', upload.single('image'), (req, res) => {
    const image = (req.file.originalname)

    const { name, location_id, description, longitude,latitude, address } = req.body
    const created_on = new Date()
    const updated_on = new Date()

    mysql.execute(add, [name, location_id, description, longitude, latitude, address, image, created_on, updated_on],
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

/* detail all Hotel */
router.get('/', (req, res) => {
    const query = req.query
    let where = ''
    let sort = ''
    let page = 'LIMIT 6 OFFSET 0'
    let full_url = ''

    if (query.search) {
        let count = 1
        where += `WHERE`
        Object.keys(query.search).forEach(key => {
            if (Object.keys(query.search).length === 1) {
                where += ` rooms.is_available = 1 AND rooms.${key} LIKE '%${query.search[key]}%' `
                full_url += `search[${key}]=${query.search[key]}&`
                count++
            } else if (Object.keys(query.search).length === count) {
                where += ` rooms.is_available = 1 AND rooms.${key} LIKE '%${query.search[key]}%' `
                full_url += `search[${key}]=${query.search[key]}&`
                count++
            }
            else {
                where += ` rooms.is_available = 1 AND rooms.${key} LIKE '%${query.search[key]}%' AND `
                full_url += `search[${key}]=${query.search[key]}&`
                count++
            }
        });
    }

    if (query.sort) {
        if (Object.keys(query.sort).length === 1) {''
            sort += `ORDER BY`
            Object.keys(query.sort).forEach(key => {
                sort += ` rooms.${key} ${query.sort[key]}`
                full_url += `sort[${key}]=${query.sort[key]}&`
            });
        }
    }

    if (query.page) {
        const offset = (Number(query.page) * 6) - 6
        page = `LIMIT 6 OFFSET ${offset}`
        full_url += `page=${query.page}&`
    } else {
        query.page = 1
    }

    // let sql1 = `SELECT COUNT(*) AS result FROM rooms ${where}`
    let sql1 = `SELECT COUNT(hotel.id) AS result FROM hotel INNER JOIN rooms ON hotel.id = rooms.hotel_id ${where}`
    const sql = `SELECT hotel.*, hotel.id AS id_hotel, rooms.*,rooms.id AS id_rooms FROM hotel INNER JOIN rooms ON hotel.id = rooms.hotel_id ${where} ${sort} ${page}`
    let prev = ''
    let next = ''

    let noPage = full_url.replace(/page=[0-9\.]+&/g, '')
    prev = `${url}hotel?${noPage}page=${Number(query.page) - 1}`
    next = `${url}hotel?${noPage}page=${Number(query.page) + 1}`

    // if (Number(query.page) - 1 === 0) {
    //     prev = ``
    // }

    // res.send(sql)
    
    mysql.execute(sql1, (err1, res1, field1) => {
        if (err1) {
            console.log(err1)
            res.send({
                status: 400,
                msg: err1,
            })
        } else if (res1.length === 0) {
            res.send({
                status: 400,
                msg: "No data retrieved!",
            })
        } else {
            mysql.execute(sql, [], (err, result, field) => {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    if (Number(query.page) === Math.ceil(Number(res1[0].result) / 6)) {
                        prev = `${url}hotel?${noPage}page=${Number(query.page) - 1}`
                        next = ``
                    } else if (query.page <= 1 || Number(query.page) - 1 === 0) {
                        prev = ``
                        next = `${url}hotel?${noPage}page=${Number(query.page) + 1}`
                    }
                    res.send({
                        status: 200,
                        info: {
                            count: res1[0].result,
                            pages: Math.ceil(Number(res1[0].result) / 6),
                            current: `${url}hotel?${full_url}`,
                            next: next,
                            previous: prev
                        },
                        data: result
                    })
                }
            })
        }
    })
})



/* detail Hotel */
router.get('/:id', (req, res) => {
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


/**edit Hotel */
router.put('/:id', upload.single('image'), (req, res) => {
    const { id } = req.params
    const image = (req.file.originalname)
    const{name,location_id,description,longitude,latitude ,address} = req.body
    const updated_on = new Date()
    mysql.execute(edit, [name,location_id,description,longitude,latitude,address,image,updated_on,id],(err,result,field)=>{
        if(err){
            console.log(err)
            res.send(err)
        } else {
            res.send({ succes: true, data: result })
        }
    }
    )
})

/** delete Hotel */
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


module.exports = router 