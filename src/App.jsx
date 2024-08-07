import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import logo from '/Images/pexels-photo.png'
import Hero1 from './components/Hero1/Hero1'
import Hero2 from './components/Hero2/Hero2'
import Hero3 from './components/Hero3/Hero3'
import Hero4 from './components/Hero4/Hero4'
import Hero5 from './components/Hero5/Hero5'
import Hero6 from './components/Hero6/Hero6'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
    <>
     <div className=" bg-cover bg-center h-auto over" style={{backgroundImage:`url(${logo})`}}>
      <div className="bg-black bg-opacity-50 h-full pb-28 z-0">
        <Navbar/>
        <Home/>  
      </div>
      </div>
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Footer/>
    </>
  )
}

export default App
