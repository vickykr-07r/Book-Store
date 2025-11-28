import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Cards } from "../Cards/Cards";
import Style from "../Courses/Courses.module.css"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
export const Courses = () => {

     let [book,setBook]=useState([]);
     useEffect(()=>{
     async function data(){
      try{
       let require= await axios.get("http://localhost:8080/books");
      setBook(require.data)
      } catch(err){
       console.error("error on fetching",err)
      }
      
      }
     data();
     },[])
  return (
    <>
    <div className={Style.Container}>
        <div className={Style.nav}><Navigation/></div>
    <div className={Style.item}>
      {
        book.map((item)=>(
        <div className={Style.data} key={item._id}> <Cards  item={item}  /> </div>
        ))
      }
    </div>
    </div>
  
      
    </>
  )
}
