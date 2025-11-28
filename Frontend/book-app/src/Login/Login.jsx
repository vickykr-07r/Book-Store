import Style from "../Login/Login.module.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import axios from "axios";

function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  let [name,setName]=useState({
    email:"",
    password:"",
  })
  function handleinput(event){
 setName({...name,[event.target.name]:event.target.value})
  }
async function handleform(event){
event.preventDefault();

try {
  await axios.post("http://localhost:8080/user/login",name).then((res)=>{
  alert(res.data.message)
   setName({email:"",password:""})
   localStorage.setItem("user",JSON.stringify(res.data))
 })

} catch (error) {
  console.log(error)
}

 
}
  return (
    <>
     <div className={Style.overlay}>
        <div className={Style.heading}>
         <h1>Login</h1>
        </div>
    
    <div className={Style.form}>
     <form onSubmit={handleform}>
        <input type="email" placeholder="Enter your email" id={Style.username} value={name.email} onChange={handleinput} name="email"/>
         <input type="password" placeholder="Enter your password" id={Style.password} value={name.password} onChange={handleinput} name="password"/>
         <button className={Style.login}>Login</button>

         <span>Not Registered? <Link to="/signup">Signup</Link></span>
    </form>
    </div>
    <div className={Style.close}>
        <button  onClick={onClose}><MdCancel /></button>
    </div>
    </div>
    </>
   
  );
}

export default Login;
