import React, { useState } from 'react'
import logo from '/Images/Coffee-Logo.svg'
import '/src/index.css'
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
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
    <div className={`menu flex gap-7  ${shownavbar ? "activeMenu flexitems":""}`}>
      <h1  className="navanimate cursor-pointer h-10 font-extrabold hover:border-b-2 hover:border-orange-400 p-2">MENU</h1>
      <h1  className="navanimate cursor-pointer h-10 font-extrabold hover:border-b-2 hover:border-orange-400 p-2">SHOP</h1>
      <h1  className="navanimate cursor-pointer h-10 font-extrabold hover:border-b-2 hover:border-orange-400 p-2">ABOUT</h1>
    </div>
    </div>
     <Link to="/"> <img src={logo} alt="Dann Good Coffee" className="h-16 lg:mr-36 " /></Link> 
    <div>
    <button className="bg-orange-500 font-extrabold text-black hover:bg-[#379393] px-3 py-3 lg:px-4 lg:py-3 lg:text-xl rounded animate-pulse">NAVIN</button>
    </div>
    
    </div>
  </nav>
  
  </>
  )
}

export default Navbar
