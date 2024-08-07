import React from 'react'
import Heroimages from '/Images/hero2.png'
import '/src/index.css'

function Section2() {
  return (
   <>
   
   <div className="h-full p-10 w-full bg-[#FFFFFF] flex items-center justify-center ">
    
      <div className="grid md:grid-cols-2 gap-9 w-full  rounded-lg  overflow-hidden max-w-6xl hero3">
        <div className="hero2images  flex justify-center items-center">
          <img src={Heroimages} alt="Coffee" className=" rounded-2xl w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center items-start  lg:pl-8 lg:pr-8 hero3">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 ">Organic, Single Origin & Damn Good</h1>
          <p className="text-gray-700 mb-6">
            Experience the rich flavors of our unique coffee blends, crafted with the finest organic ingredients from around the world. Each sip is a journey to the heart of damn goodness.
          </p>
          <button className="px-4 py-2 border-2 border-orange-500 text-black hover:border-[#379393] font-extrabold rounded duration-300 ease-out hover:bg-[#379393]">SHOP BEANS</button>
        </div>
      </div>
    </div>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor" className="section-divider-bottoms is-orange is-flip"><path d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z"></path></svg>
   </>
  )
}

export default Section2
