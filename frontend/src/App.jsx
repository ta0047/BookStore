import React from 'react'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Components/Signup'
import Courses from './Pages/Courses'
import Books from './Pages/Books'
export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="about" element={<About />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path='courses'element={<Courses/>}/>
        <Route path='books'element={<Books/>}/>
      </Routes>
       <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick={false}
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="colored"
                      transition={Flip}
                  />
    </BrowserRouter>
   
  )
}

