require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const {detail,add,dlt,edit} = require('../model/hotelBooking')


// ADD Rooms
router.post('/',(req,res)=>{
    const {user_id,rooms_id, duration} = req.body
    const is_booked = 0
    const created_on = new Date()
    const updated_on = new Date() 
    // console.log(rooms_type_id, req.files.originalname)
    mysql.execute(add, [user_id,rooms_id,duration,is_booked,created_on,updated_on],
        (err,result,rows,field)=>{
            if(err){
                console.log(err)
            }else{
                res.send({succes:true,data:result})
            }
        }
    )
})




/* detail room */
router.get('/:id',(req,res)=>{
    const {id} = req.params
    mysql.execute(detail,[id], (err, result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    })
})


/**check out room */
router.put('/checkout/:id',(req,res)=>{
    const {id} = req.params
    const is_booked = 1
    const updated_on = new Date()
    mysql.execute(edit, [is_booked,updated_on,id],(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    }
    ) 
})


/**update duration*/
router.put('/night/:id',(req,res)=>{
    const {id} = req.params
    const {duration} = req.body
    const updated_on = new Date()

    const sql = 'UPDATE hotel_booking SET duration=?,updated_on=? WHERE id=?'
    mysql.execute(sql, [duration,updated_on,id],(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    }
    ) 
})


/** delete Hotel Booking */
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