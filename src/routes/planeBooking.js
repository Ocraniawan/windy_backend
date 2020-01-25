require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const {detail,add,dlt,edit} = require('../model/planeBooking')


// ADD Booking
router.post('/',(req,res)=>{
    const {user_id,flight_id} = req.body
    const is_booked = 0
    const created_on = new Date()
    const updated_on = new Date() 
    mysql.execute(add, [user_id,flight_id,is_booked,created_on,updated_on],
        (err,result,rows,field)=>{
            if(err){
                console.log(err)
            }else{
                res.send({succes:true,data:result})
            }
        }
    )
})




/* detail booking */
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


/**check out flight */
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