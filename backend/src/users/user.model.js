const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  
const usersSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{//role part in your usersSchema is a field that defines the role of the user within your application
        type:String,
        enum:['user','admin'] ,//enum property defines an array of valid values. In this case, it restricts the role field to only two possible values:
        //enum property, which restricts the value of this field
        require:true

    }
})

usersSchema.pre("save",async function (next){       //Mongoose middleware that runs before saving a document
    if(!this.isModified("password")) return next(); //. It's specifically designed to hash the user's password before saving it,
    this.password=await bcrypt.hash(this.password,10)
    next()
})

const User = mongoose.model("User",usersSchema)
module.exports=User