import React from 'react'
import '/src/index.css'
function Home() {
  return (
    <div className="text-center text-white pt-60 sm:pt-72 md:pt-60 lg:pt-72   w-auto">
      <div className='animate'>
      <h1 className="lg:text-6xl text-5xl font-bold mb-4">Chill Vibes and<br />Dann Good Coffee</h1>
      <p className="mb-8">An inspiring space to fuel your ambition and coffee that's dann good.</p>
      <div className="space-x-4">
        <button className="bg-orange-500 font-extrabold text-black hover:bg-[#379393] px-6 py-3 rounded">ORDER</button>
        <button className="hover:bg-white hover:text-black border-2 font-extrabold border-white text-white px-6 py-3 rounded">MENU</button>
      </div>
      <p className="mt-8">OPEN DAILY 7AM-7PM</p>
      </div>
      
    </div>
  )
}

export default Home
