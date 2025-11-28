import { Link } from "react-router-dom";
import Style from "../Navigation/Navigation.module.css"
import Login from "../Login/Login";
import { useState } from "react";
function Navigation(){
  let [isOpen,setisOpen]=useState(false)
    return(
        <>
        <div className={Style.container}>
         <div className={Style.rightdata}>
            <h1>Book Store</h1>
        </div>
        <div className={Style.leftdata}>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
          <div className={Style.search}>
            <input type="text" placeholder="Search" />
          </div>
          <div className={Style.loginbutton}>
            <button onClick={()=>{setisOpen(true)}}>Login</button>
          </div>
           
        </div>
        </div>
        <Login isOpen={isOpen} onClose={() => setisOpen(false)} />
        </>
    )
}

export default Navigation;