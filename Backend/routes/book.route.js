const express=require("express")
const router=express.Router();
const {getbook}=require("../Controllers/book.controllers")

router.get("/",getbook)

module.exports = router;


// jai shree ram