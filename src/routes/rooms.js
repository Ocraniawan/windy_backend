require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const {detail,add,dlt,edit, all} = require('../model/rooms')

/**Upload Foto/File */ 
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({destination: function(req,file,cb){
    cb(null, './src/images/rooms')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const fileFilter = function (req, files, cb) {
    var ext = path.extname(files.originalname)
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return cb('Extension not allowed')
    }
    cb(null, true)
}

// const fileFilter = (req,files,cb)=> {
//     if (files.mimetype === 'image/jpeg' || files.mimetype === 'image/png'){
//         cb(null, true)
//     }else{
//         cb(null, false)
//     }
// }
const upload = multer({storage:storage, fileFilter:fileFilter})

// ADD Rooms
router.post('/',upload.array('images', 3),(req,res)=>{
    var images = ''
    for(i = 0; i < 3; i++)
    if (i === 2) {
        images += (req.files[i].originalname)
    }else{
        images += (req.files[i].originalname + ', ')
    }
    // const images = (req.files.originalname)
    const {rooms_type_id,hotel_id,price} = req.body
    const created_on = new Date()
    const updated_on = new Date() 
    console.log(rooms_type_id, req.files.originalname)
    mysql.execute(add, [rooms_type_id,hotel_id,price,images,created_on,updated_on],
        (err,result,rows,field)=>{
            if(err){
                console.log(err)
            }else{
                res.send({succes:true,data:result})
            }
        }
    )
})

/* detail all rooms */
router.get('/',(req,res)=>{
    
    mysql.execute(all,[], (err, result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    })
})



/* detail room */
router.get('/:id',(req,res)=>{
    const {id} = req.params
    mysql.execute(detail,[id], (err, result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result[0]})
        }
    })
})

 
/**edit room */
router.put('/:id',upload.array('images', 5),(req,res)=>{
    const {id} = req.params
    const images = (req.file.originalname)
    const{rooms_type_id,hotel_id,price} = req.body
    const updated_on = new Date()
    mysql.execute(edit, [rooms_type_id,hotel_id,price,images,updated_on,id],(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    }
    ) 
})

/** delete Hotel */
router.delete('/:id',(req,res)=>{
    const {id} = req.params
    mysql.execute(dlt,[id], (err,result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    })
})


module.exports = router 