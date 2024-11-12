const express=require("express");
const { route } = require("../orders/order.route");
const router = express.Router();
const jwt = require("jsonwebtoken")
const User = require("./user.model")
router.post("/admin",async(req,res)=>{
    const {username,password} = req.body
    try
    {
      const admin = await User.findOne({username})
      if(!admin){
       return res.status(404).send({message:"Admin is not found"})
      }
      if(password!==admin.password){
      return  res.status(401).send({message:"Invalid password"})
      }
      const token = jwt.sign({id:admin._id,username:admin.username,role:admin.role},"secret") //authentication and authorization systems, 
      return res.status(200).json({
        message:"Authentication Successfull",
        token:token,
        user:{
            username:admin.username,
            role:admin.role
        }
      })
    }
    catch(error){
        console.error("failed to login as admin")
        res.status(401).send({message:"failed to login as admin"})
    } 
})


module.exports=router