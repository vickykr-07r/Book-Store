const express=require("express");
const app=express();
const mongoose=require("mongoose")
const Book=require("../Backend/models/book.model")
const connectdb=require("../Backend/db/db")
const dotenv=require("dotenv")
const bookroute=require("../Backend/routes/book.route")
const cors = require("cors");
app.use(cors());
const Userrouter=require("../Backend/routes/user.route")
app.use(express.json())
dotenv.config();
connectdb();

app.get("/",(req,res)=>{
res.send("hello ji")
})

app.use("/books",bookroute)
app.use("/user",Userrouter);
app.listen(process.env.PORT,()=>{
    console.log("the app is listening")
})