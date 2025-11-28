const mongoose=require("mongoose");
 async function connectdb(){

    try {
        await mongoose.connect("mongodb://localhost:27017/bookapp")
       console.log("database connected") 
    } catch (error) {
        console.log("database not connected",error)
    }
    
}
module.exports=connectdb;