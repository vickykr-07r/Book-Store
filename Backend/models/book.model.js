const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
name:{
    type:String
},
title:{
    type:String
},
price:{
    type:Number
},
category:{
    type:String
},image:{
    type:String
}
})

const Book=mongoose.model("Book",bookSchema);

module.exports =  Book;