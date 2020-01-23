require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const {detail,add,dlt,edit, all} = require('../model/plane')

/**Upload Foto/File */
const multer = require('multer')
const storage = multer.diskStorage({destination: function(req,file,cb){
    cb(null, './src/images/plane')
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

// ADD PLANE
router.post('/',upload.single('image'),(req,res)=>{
    const image = (req.file.originalname)
    const {name} = req.body
    const created_on = new Date()
    const updated_on = new Date()

    mysql.execute(add, [name,image,created_on,updated_on],
        (err,result,rows,field)=>{
            if(err){
                console.log(err)
            }else{
                res.send({succes:true,data:result})
            }
        }
    )
})

/* detail all Plane */
router.get('/',(req,res)=>{
    
    mysql.execute(all,[], (err, result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    })
})



/* detail Plane */
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


/**edit Plane */
router.put('/:id',upload.single('image'),(req,res)=>{
    const {id} = req.params
    const image = (req.file.originalname)
    const{name} = req.body
    const updated_on = new Date()
    mysql.execute(edit, [name,image,updated_on,id],(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    }
    ) 
})

/** delete Plane */
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