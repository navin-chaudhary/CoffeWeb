import React from 'react'
import '/src/index.css'

function Hero5() {
  return (
    <>
<svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor" class="section-divider is-teal-dark"><path d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z"></path></svg>
    <div className="bg-[#016664] p-10  flex flex-col items-center">
      <h1 className=" text-4xl lg:text-6xl font-bold text-white mb-8 text-center">Thrilled Customers</h1>
      <p className="text-lg text-white mb-10 text-center">
        Whoa, those are some dann good reviews.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 hero4animate">
        <div className="text-white border-2 border-[#2A8A89] rounded-xl  p-6 ">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-yellow-300">★★★★★</span>
          </div>
          <p className="mb-4">
            Dann good coffee, rad staff, and a killer atmosphere!
          </p>
          <div className="flex items-center lg:pt-4">
            <div className="rounded-full h-10 w-10 text-center bg-[#2A8A89] font-extrabold text-gray-400 p-2 mr-2">N</div>
            <p>Not Dann, Coffee Lover</p>
          </div>
        </div>
        <div className="text-white border-2 border-[#2A8A89] rounded-xl  p-6">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-yellow-300">★★★★★</span>
          </div>
          <p className="mb-4">
            The best coffee on earth! I can't start my day without it.
          </p>
          <div className="flex items-center">
            <div className="rounded-full h-10 w-10 text-center bg-[#2A8A89] font-extrabold text-gray-400 p-2 mr-2">M</div>
            <p>Mr. Nnad, Connoisseur of Coffee</p>
          </div>
        </div>
        <div className="text-white border-2 border-[#2A8A89] rounded-xl  p-6">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-yellow-300">★★★★★</span>
          </div>
          <p className="mb-4">
            Dann Good Coffee is my go-to place for a solid cup of joe.
          </p>
          <div className="flex items-center">
            <div className="rounded-full h-10 w-10 text-center bg-[#2A8A89] font-extrabold text-gray-400 p-2 mr-2">P</div>
            <p>Petty, Just A Guy</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero5
