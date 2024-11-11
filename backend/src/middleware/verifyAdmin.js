const jwt =require("jsonwebtoken")
const verifyAdmin = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(404).json({message:"Access denied no token provided"})
    }
    try{
        const decode = jwt.verify(authHeader,"secret",(err,user)=>{
            if(err){
                return res.status(403).json({message:"Invalid credential"})

            }
            req.user=user
            next()
        });
        
    }
    catch(err){
        return res.status(403).json({message:"Invalid admin"})    
    }
}
module.exports=verifyAdmin