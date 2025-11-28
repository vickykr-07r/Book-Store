import React from 'react'
import Style from "../Banner/Banner.module.css"
export const Banner = () => {
  return (
    <>
    <div className={Style.container}>
        <div className={Style.left}>
         <h1>
           “Welcome! Grow your knowledge every day.”
         </h1>
         <div>
            Books are one of the greatest sources of knowledge.
They have been with humanity for thousands of years.
A book is more than just pages bound together.
It carries ideas, stories, and emotions across generations.
Books can teach us lessons that no teacher ever could.
They can transport us to different worlds.
They can make us laugh, cry, or think deeply.
         
         </div>

        <div>
            <input type="text" placeholder='Enter Your Email' />
        </div>
        <div><button>Get Stared</button></div>
        </div>
        <div className={Style.right}>
          <img src="https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_1280.jpg" alt="" />
        </div>
    </div>
    </>
  )
}
