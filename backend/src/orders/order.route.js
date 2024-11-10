const express = require('express');
const Order = require('./order.model');
const router =  express.Router();

router.post("/",async(req,res)=>{
    try{ 
      const newOrder = await Order({...req.body})
      await  newOrder.save()
      res.status(200).send({message: "Order successfull", order:newOrder})
     }catch(error){
       console.error("Error ", error);
       res.status(500).send({message: "Failed to create order"})
     }
  })

router.get("/email/:email",async(req,res)=>{
  try{
    const {email}=req.params;
    const orders = await Order.find({email}).sort({createdAt:-1})
    if(!orders){
    res.status(200).json({message:"Order not found"})
    }
    res.status(200).json(orders)
     }
     catch(error){
      console.error("Error ", error);
      res.status(500).send({message: "Failed to fetch order"})
    }
})




module.exports = router;