import React from 'react'
import Heroimages1 from '/Images/Good-Coffee1.svg'
import Heroimages2 from '/Images/Good-Coffee2.svg'
import Heroimages3 from '/Images/Good-Coffee3.svg'
import '/src/index.css'
function Hero3() {
  return (
    <>
    
    <div className=" hero3maindiv  w-full bg-[#C06522] flex flex-wrap items-center justify-center pt-8 lg:pt-16 lg:pb-10">
    
       <div className=' w-[400px] h-[300px] m-2 hero3animate hero3'>
         <div className='flex justify-center items-center'>
          <img src={Heroimages1} alt="Custom Roasts" className='h-20'/>
          </div>
          <h1 className='text-center text-3xl font-extrabold mt-3 mb-3'>Custom Roasts</h1>
          <p className='mb-5 text-center'>Bring your coffe ideas and we'll make a custom roast just for you</p>
          <div  className='flex justify-center'>
            <button className='text-center bg-white text-black p-3 rounded-lg font-extrabold  hover:bg-[#379393] duration-300 ease-out'>LET'S ROAST</button>
            </div>
       </div>
       <div className=' w-[400px] h-[300px] hero3animate hero3 m-2'>
         <div className='flex justify-center items-center'>
          <img src={Heroimages2} alt="Custom Roasts" className='h-20'/>
          </div>
          <h1 className='text-center text-3xl font-extrabold mt-3 mb-3'>Web Fuel</h1>
          <p className='mb-5 text-center'>When we're not serving coffee, we're fueling the web with custom-built websites.</p>
          <div  className='flex justify-center'>
            <button className='text-center bg-white text-black p-3 rounded-lg font-extrabold uppercase hover:bg-[#379393] duration-300 ease-out'>Get Started</button>
            </div>
       </div>
       <div className=' w-[400px] h-[300px] hero3animate hero3   m-2'>
         <div className='flex justify-center items-center'>
          <img src={Heroimages3} alt="Custom Roasts" className='h-20'/>
          </div>
          <h1 className='text-center text-3xl font-extrabold mt-3 mb-3'>Beard Training</h1>
          <p className='mb-5 text-center'>Bring your coffe ideas and we'll make a custom roast just for you</p>
          <div  className='flex justify-center'>
            <button className='text-center bg-white text-black p-3 rounded-lg font-extrabold uppercase hover:bg-[#379393] duration-300 ease-out'>Train Me</button>
            </div>
       </div>
    </div>
    </>
  )
}

export default Hero3
