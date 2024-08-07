import { useState } from 'react';
import '/src/index.css'

function Hero7() {
  const [isCoffeeSourcedOpen, setIsCoffeeSourcedOpen] = useState(false);
  const [isVeganOptionsOpen, setIsVeganOptionsOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isWifiOpen, setIsWifiOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  return (
    <>
      
      <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl lg:text-7xl font-bold text-center mb-8">FAQ</h1>
      <p className="text-center text-sm text-gray-600 mb-12">
        Find answers to commonly asked questions about our coffee and community.
      </p>
      <div className='flex justify-center w-full'>
      <div className="grid grid-cols-1 gap-6  lg:w-[500px]">
        <div className="bg-[#f9f8f8]   rounded-lg shadow-md p-6 hover:text-orange-700">
          <div
            className="flex justify-between h-4  transition-transform hover:text-orange-700 duration-700 items-center cursor-pointer"
            onClick={() => setIsCoffeeSourcedOpen(!isCoffeeSourcedOpen)}
          >
            <h2 className=" lg:text-2xl hover:text-orange-700 font-extrabold ">
              What is your coffee sourced?
            </h2>
            <svg
              className={`transition-transform duration-700 hover:text-orange-700 w-10 ${
                isCoffeeSourcedOpen ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
            //   className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isCoffeeSourcedOpen && (
            <p className="mt-3 text-sm text-gray-600">
              Our coffee is sourced from sustainable farms around the world,
              ensuring the highest quality and ethical practices.
            </p>
          )}
        </div>
        <div className="bg-[#f9f8f8]   rounded-lg shadow-md p-6 hover:text-orange-700">
          <div
            className="flex justify-between h-4  transition-transform hover:text-orange-700 duration-700 items-center cursor-pointer"
            onClick={() => setIsVeganOptionsOpen(!isVeganOptionsOpen)}
          >
            <h2 className=" lg:text-2xl hover:text-orange-700 font-extrabold ">
              Do you offer vegan options?
            </h2>
            <svg
              className={`transition-transform duration-700 hover:text-orange-700 w-10 ${
                isVeganOptionsOpen ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
            //   className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isVeganOptionsOpen && (
            <p className="mt-3 text-sm text-gray-600">
              Yes, we offer a variety of vegan options, including plant-based milk alternatives & vegan pastries.
            </p>
          )}
        </div>
        <div className="bg-[#f9f8f8]   rounded-lg shadow-md p-6 hover:text-orange-700">
          <div
            className="flex justify-between h-4  transition-transform hover:text-orange-700 duration-700 items-center cursor-pointer"
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            <h2 className="lg:text-2xl hover:text-orange-700 font-extrabold">
              Where are you located?
            </h2>
            <svg
              className={`transition-transform duration-700 hover:text-orange-700 w-10 ${
                isLocationOpen ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
            //   className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isLocationOpen && (
            <p className="mt-3 text-sm text-gray-600">
              We are located at 4114 Rad Ave, in the heart of the city. Come visit us!
            </p>
          )}
        </div>
        <div className="bg-[#f9f8f8]   rounded-lg shadow-md p-6 hover:text-orange-700">
          <div
            className="flex justify-between h-4  transition-transform hover:text-orange-700 duration-700 items-center cursor-pointer"
            onClick={() => setIsWifiOpen(!isWifiOpen)}
          >
            <h2 className="lg:text-2xl hover:text-orange-700 font-extrabold">
              Do you have Wi-Fi?
            </h2>
            <svg
              className={`transition-transform duration-700 hover:text-orange-700 w-10  ${
                isWifiOpen ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
            //   className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isWifiOpen && (
            <p className="mt-3 text-sm text-gray-600">
              Yes, we offer free Wi-Fi to all our customers. Stay connected while enjoying your coffee.
            </p>
          )}
        </div>
        <div className="bg-[#f9f8f8]   rounded-lg shadow-md p-6 hover:text-orange-700">
          <div
            className="flex justify-between h-4  transition-transform hover:text-orange-700 duration-700 items-center cursor-pointer"
            onClick={() => setIsHoursOpen(!isHoursOpen)}
          >
            <h2 className="lg:text-2xl hover:text-orange-700 font-extrabold">
              What are your hours?
            </h2>
            <svg
              className={`transition-transform duration-700 hover:text-orange-700 w-10 ${
                isHoursOpen ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
            //   className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isHoursOpen && (
            <p className="mt-3 text-sm text-gray-600">
              We are open every day from 7am to 7pm.
            </p>
          )}
        </div>
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

export default Hero7;