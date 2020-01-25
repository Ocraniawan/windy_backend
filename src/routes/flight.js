require('dotenv').config()
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const mysql = require('../resources/config')
const auth = require('../resources/middleware')
const {detail,add,dlt,edit, all} = require('../model/flight')


// ADD FLIGHT
router.post('/',(req,res)=>{
    const {route_id,plane_id, class_id, schedule_id,ticket_price} = req.body
    const created_on = new Date()
    const updated_on = new Date() 
    mysql.execute(add, [route_id,plane_id, class_id, schedule_id,ticket_price,created_on,updated_on],
        (err,result,rows,field)=>{
            if(err){
                console.log(err)
            }else{
                res.send({succes:true,data:result})
            }
        }
    )
})

/* detail all flight */
router.get('/',(req,res)=>{
    
    mysql.execute(all,[], (err, result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    })
})



/* detail flight by route */
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

 
/**edit flight */
router.put('/:id',(req,res)=>{
    const {id} = req.params
    const{route_id,plane_id, class_id, schedule_id,ticket_price} = req.body
    const updated_on = new Date()
    mysql.execute(edit, [route_id,plane_id, class_id, schedule_id,ticket_price,updated_on,id],(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({succes:true,data:result})
        }
    }
    ) 
})

/** delete flight */
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