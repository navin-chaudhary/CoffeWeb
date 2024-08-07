import React from 'react'
import Heroimage from '/Images/Coffe.png'
import '/src/index.css'

function Hero1() {
  return (
   <>
     <div className='w-full bg-[#379393] flex justify-center'>
      <div className="bg-[#379393] max-w-[1520px] h-full p-6  md:p-12 lg:p-24  grid grid-cols-1 md:grid-cols-2 items-center ">
        
        <div className="relative flex justify-center md:order-2">
          <img src={Heroimage} alt="Coffee Cup" className="heroimages z-20 object-contain lg:absolute top-[-400px] h-[300px] lg:h-[600px] md:w-[400px] lg:w-[500px] transform " />
        </div>
        <div className="text-center md:text-left md:order-1">
          <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-extrabold w-full  text-black mb-4 ">Peruse Our Vintage, Mid-Century Vibe</h1>
          <p className="text-black mb-11 mt-8">
            Step into a world of surf, skating, snowboarding, outdoor adventure, and mid-century awesomeness at Damn Good Coffee.
            Our coffee shop is inspired by the retro vibes of the past, offering a cozy and nostalgic atmosphere for coffee lovers to enjoy.
          </p>
          <button className="text-black border-2 hover:bg-black hover:text-white duration-300 ease-out border-black font-extrabold py-2 px-4 rounded">READ OUR ORIGIN STORY</button>
        </div>
      </div>
        </div>
       
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor" class="section-divider-top"><path d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z"></path></svg>
       
      
       
   </>
  )
}

export default Hero1
