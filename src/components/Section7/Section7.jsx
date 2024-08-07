import { useState } from 'react';
import '/src/index.css'
import Accordion from '../Accordion/Accordion';

function Section7() {
 
  return (
    <>
      
      <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl lg:text-7xl font-bold text-center mb-8">FAQ</h1>
        <p className="text-center text-sm text-gray-600 mb-12">
        Find answers to commonly asked questions about our coffee and community.
      </p>
      <div className='flex justify-center w-full'>
      <div className="grid grid-cols-1 gap-6  lg:w-[500px]">
        <Accordion title={"What is your coffee sourced?"} value={"Our coffee is sourced from sustainable farms around the world,ensuring the highest quality and ethical practices."}/>
        <Accordion title={"Do you offer vegan options?"} value={" Yes, we offer a variety of vegan options, including plant-based milk alternatives & vegan pastries."}/>
        <Accordion title={"Where are you located?"} value={"  We are located at 4114 Rad Ave, in the heart of the city. Come visit us!"}/>
        <Accordion title={"Do you have Wi-Fi?"} value={" Yes, we offer free Wi-Fi to all our customers. Stay connected while enjoying your coffee."}/>
        <Accordion title={" What are your hours?"} value={" We are open every day from 7am to 7pm."}/>
    
      </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us for more information.
        </p>
        <button className="border-orange-500 border-[1px] hover:bg-[#379292] hover:border-[#379292] text-black font-bold py-2 px-4 rounded-md">
          CONTACT
        </button>
      </div>
    </div>
    </>

  );
}

export default Section7;