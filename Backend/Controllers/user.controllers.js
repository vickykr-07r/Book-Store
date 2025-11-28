
const User=require("../models/user.model");
const bcrypt=require("bcrypt")
async function signup(req,res){
   try {
     let {name,email,password}=req.body;
     let user= await User.findOne({email});

    
     if(user)
     {
        return res.status(200).json({
            message:"user already signup",
            user:user
        })
     }
      let hassedpassword=await bcrypt.hash(password,10)

        let newUser= new User({
         name,
         email,
         password:hassedpassword
        })
     
       await newUser.save();
   } catch (error) {
    console.log(error);
   }
}

async function login(req,res){
    try {
         let {email,password}=req.body;
    let user= await User.findOne({email})
    let isMatch= await bcrypt.compare(password,user.password)
    if(!user || !isMatch)
    {
        return res.status(400).json({
            message:"invalid user and password"
        })
    }else{
        return res.status(200).json({
            message:"login successfully",
             user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
        })
    }
    } catch (error) {
        console.log(error)
    }
   
}

module.exports={signup,login};