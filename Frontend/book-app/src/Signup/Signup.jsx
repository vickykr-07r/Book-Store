import { Link } from "react-router-dom";
import Style from "../Signup/Signup.module.css"
import { useState } from "react";
import axios from "axios";
function Signup(){
    let [name,setName]=useState({
        name:"",
        email:"",
        password:""
    })
    function handleinput(event){
     setName({...name,[event.target.name]:event.target.value})
    }
    async function handlesubmit(event){
     event.preventDefault();

     try {
       await axios.post("http://localhost:8080/user/signup",name).then((res)=>{
      alert(res.data.message)
      setName({name:"",email:"",password:""})

      localStorage.setItem("Vicky",JSON.stringify(res.data))
       })
     } catch (error) {
      console.log(error)
     }
     
    }
    return(
        <>
        <div className={Style.Container}>
          <video className={Style.videoBg} autoPlay loop muted>
        <source src="https://www.pexels.com/download/video/8784784/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          <div className={Style.form}>
          <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter your username" id={Style.username} value={name.name} onChange={handleinput} name="name"  />
        <input type="email" placeholder="Enter your email" id={Style.email} value={name.email} onChange={handleinput} name="email" />
         <input type="password" placeholder="Enter your password" id={Style.password} value={name.password} onChange={handleinput} name="password"/>
         <button className={Style.Signup}>Signup</button>
         <span>Have Account? <Link to="/login">Login</Link></span>
    </form>
          </div>
        </div>
        </>
    )
}
export default Signup;