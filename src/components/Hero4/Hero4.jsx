import React from 'react'
import Heroimages1 from '/Images/Dann-01.png'
import Heroimages2 from '/Images/Dann-02.png'
import Heroimages3 from '/Images/Dann-03.png'
import Heroimages4 from '/Images/Dann-04.png'
import '/src/index.css'
function Hero4() {
  return (
    <>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor" className="section-divider-top is-orange is-flip"><path d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z"></path></svg>
    <div className="container mx-auto px-4 py-16">
      <h2 className="lg:text-7xl sm:text-6xl text-5xl font-bold text-center mb-8">Meet Our Team</h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        We are a group of adventure-seeking, coffee-loving Danns.
      </p>
      <div className='flex flex-wrap justify-center '>
      <div className="home_team_list   ">
        <div className="hero4animate bg-black text-white rounded-lg shadow-md p-4 lg:p-2 md:p-2  w-80 lg:w-64 sm:w-56 md:w-64">
          <img
            src={Heroimages1}
            alt="Dann"
            className="w-72 sm:w-80 h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold  mb-2 text-center">Dann</h3>
          <p className="text-center">Barista</p>
        </div>
        <div className=" hero4animate bg-black text-white rounded-lg shadow-md p-4 lg:p-2 md:p-2  w-80 lg:w-64 sm:w-56 md:w-64">
          <img
            src={Heroimages2}
            alt="Dann the Mann"
            className="w-72 sm:w-80 h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold  mb-2 text-center">Dann the Mann</h3>
          <p className="text-center">Beard Manager</p>
        </div>
        <div className=" hero4animate bg-black text-white rounded-lg shadow-md p-4 lg:p-2 md:p-2  w-80 lg:w-64 sm:w-56 md:w-64">
          <img
            src={Heroimages3}
            alt="D. 'Petty'"
            className="w-72 sm:w-80 h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-center mb-2">D. "Petty"</h3>
          <p className="text-center">Roaster</p>
        </div>
        <div className="hero4animate bg-black text-white rounded-lg shadow-md p-4 lg:p-2 md:p-2  w-80 lg:w-64 sm:w-56 md:w-64">
          <img
            src={Heroimages4}
            alt="Danny"
            className="w-72 sm:w-80 h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-center mb-2">Danny</h3>
          <p className="text-center">Web Fueler</p>
        </div>
      </div>
      </div>
      <h3 className="text-2xl font-bold text-center mb-4 mt-12">
        Ready for the ride of your life?
      </h3>
      <p className="text-lg text-center text-gray-600 mb-8">
        Join our dann good team and step into the rad life!
      </p>
      <div className='flex justify-center'>
      <button className="border-2  border-orange-500 hover:border-[#256060] hover:bg-[#379393] text-black font-extrabold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
        VIEW OPEN POSITIONS
      </button>
      </div>
    </div>
    </>
  )
}

export default Hero4
