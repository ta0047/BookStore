import React, { useState ,useEffect} from 'react'
import Banner from '../Components/Banner'
import FreeBook from '../Components/FreeBook'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  
  return (
    <>
    <Navbar/>
    <Banner/>
    <FreeBook/>
    <Footer/>
    </>
  )
}

export default Home