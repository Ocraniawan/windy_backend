require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const {detail,add,dlt,edit, all} = require('../model/hotel')

/**Upload Foto/File */
const multer = require('multer')
const storage = multer.diskStorage({destination: function(req,file,cb){
    cb(null, './src/images/hotel')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})
const fileFilter = (req,file,cb)=> {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}
const upload = multer({storage:storage, fileFilter:fileFilter})

// ADD HOTEL
router.post('/',upload.single('image'),(req,res)=>{
    const image = (req.file.originalname)
    const {name,location_id,description,address,longitude,latitude} = req.body
    const created_on = new Date()
    const updated_on = new Date()

    mysql.execute(add, [name,location_id,description,longitude,latitude,address,image,created_on,updated_on],
        (err,result,rows,field)=>{
            if(err){
                console.log(err)
                res.send(err)
            }else{
                res.send({succes:true,data:result})
            }
        }
    )
})

/* detail all Hotel */
router.get('/',(req,res)=>{
    
    mysql.execute(all,[], (err, result,field)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            res.send({succes:true,data:result})
        }
    })
})



/* detail Hotel */
router.get('/:id',(req,res)=>{
    const {id} = req.params
    mysql.execute(detail,[id], (err, result,field)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            res.send({succes:true,data:result[0]})
        }
    })
})


/**edit Hotel */
router.put('/:id',upload.single('image'),(req,res)=>{
    const {id} = req.params
    const image = (req.file.originalname)
    const{name,location_id,description,longitude,latitude ,address} = req.body
    const updated_on = new Date()
    mysql.execute(edit, [name,location_id,description,longitude,latitude,address,image,updated_on,id],(err,result,field)=>{
        if(err){
            console.log(err)
            res.send(err)
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
            res.send(err)
        }else{
            res.send({succes:true,data:result})
        }
    })
})


module.exports = router 