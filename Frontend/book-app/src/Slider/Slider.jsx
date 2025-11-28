import React from "react";
import Slider from "react-slick";
import { Cards } from "../Cards/Cards";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function MultipleItems() {
   
  let [freeBook,setFreeBook]=useState([]);

  useEffect(()=>{
    
    async function getFreeBook(){
      try {
        let getData= await axios.get("http://localhost:8080/books")
        let originalData=getData.data.filter((freedata)=>{
        return freedata.category==="free";
        })
        setFreeBook(originalData)
      } catch (error) {
        console.log("getting error",err)
      }
   
    }
   getFreeBook();
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
     
          {freeBook.map((item)=>(
          <div>
           <Cards  item={item}  key={item.id}/>
           </div>
          ))}
        
      </Slider>
    </div>
  );
}

export default MultipleItems;
