import { Home } from './Home/Home'
import './App.css'
import {Routes,Route}  from "react-router-dom";
import { Courses } from './Courses/Courses';
import Signup from './Signup/Signup.jsx';
import Login from './Login/Login';
import { Contact } from './Contact/Contact.jsx';
import About from './About/About.jsx';
function App() {
 

  return (
    <>
    <Routes>
   <Route path='/' element={ <Home/>} />
    <Route path='/course' element={ <Courses/>} />
    <Route path='/about' element={ <About/>} />
    <Route path='/contact' element={ <Contact/>} />
    <Route path='/login' element={ <Login/>} />
    <Route path='/signup' element={ <Signup/>} />
    </Routes>
   
    </>
  )
}

export default App
