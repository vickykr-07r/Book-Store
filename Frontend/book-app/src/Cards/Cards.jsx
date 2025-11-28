import React from 'react'
import Style from "../Cards/Cards.module.css"
export const Cards = ({item}) => {
  return (
    <>
    <div className={Style.cards}>
        <div className={Style.Top}>
            <img src={item.image} alt="" />
        </div>
        <div className={Style.bottom}>

            <div><h2>{item.name}</h2> <span>{item.free}</span></div>
            <div>{item.title}</div>
             <div>
                <p>{item.price}</p>
                <button>Buy Now</button>
             </div>
        </div>
    </div>
    </>
  )
}
