import React from 'react'
import Heroimages1 from '/Images/Moment-01.png'
import Heroimages2 from '/Images/Moment-02.png'
import '/src/index.css'
import Hero7 from '../Section7/Section7'

function Section6() {
  return (
 <>
 <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor" className="section-6 is-teal-dark"><path d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z"></path></svg>
 <div className="flex flex-col items-center justify-center  bg-[#FFFFFF]">
      <div className="text-center">
        <h1 className="text-4xl lg:text-7xl font-extrabold mt-10">Vibrant Moments</h1>
        <p className="text-gray-600 mt-2">Experience the thrill of surf, skate, and outdoor adventures.</p>
      </div>
      <div className='flex justify-center '>
      <div className="flex flex-wrap items-center justify-center mt-10">
        <div className="fleximage hero4animate hero4ani justify-center items-center  p-4">
          <img src={Heroimages1} alt="Surfboard" className=" w-96  rounded-xl shadow-md" />
        </div>
        <div className="fleximage hero4animate hero4ani p-4">
          <img src={Heroimages2} alt="Skateboard" className=" w-96 rounded-xl shadow-md" />
        </div>
      </div>
      </div>
      <div className='w-full  '>
      <Hero7/>
      </div>
    </div>
 </>
  )
}

export default Section6
