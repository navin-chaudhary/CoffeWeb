import React, { useState } from 'react'
import logo from '/Images/Coffee-Logo.svg'
import '/src/index.css'
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [shownavbar,setshownavbar]=useState(false)
  return (
    <>
    
    <nav className="navbar sticky top-0  w-full bg-transparent z-50  p-4">
    <div className='max-w-[1400px] mx-auto  flex items-center justify-between'>
    <div className="items flex space-x-6">
      <div className='icon' onClick={()=>{setshownavbar(!shownavbar)}}>
        {
        shownavbar ? 
         <span> <GrClose /></span>
         :
         <span><TiThMenu /></span>
        }
    
    </div>
    <div className={`menu flex gap-7 ${shownavbar ? "activeMenu flexitems":""}`}>
      <a href="#menu" className="navanimate h-10 font-extrabold hover:border-b-2 hover:border-orange-400 p-2">MENU</a>
      <a href="#shop" className="navanimate h-10 font-extrabold hover:border-b-2 hover:border-orange-400 p-2">SHOP</a>
      <a href="#about" className="navanimate h-10 font-extrabold hover:border-b-2 hover:border-orange-400 p-2">ABOUT</a>
    </div>
    </div>
     <a href="/"> <img src={logo} alt="Dann Good Coffee" className="h-16 lg:mr-36 " /></a> 
    <div>
    <button className="bg-orange-500 font-extrabold text-black hover:bg-[#379393] px-6 py-3 rounded animate-pulse">ORDER</button>
    </div>
    
    </div>
  </nav>
  
  </>
  )
}

export default Navbar
