import React from "react";
import Heroimages1 from "/Images/Thats-Dann-Good-Light.svg";
import logo from "/Images/Coffee-Logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor" className="section-3 is-black"><path d="M 0 -10 L 0 0 C 0 0 0 0 0 0 C 80 0 160 84.97 240 84.97 C 320 84.97 400 99.22 480 99.22 C 560 99.22 640 2.39 720 2.39 C 800 2.39 880 68.73 960 68.73 C 1040 68.73 1120 42.98 1200 42.98 L 1200 0 L 1200 -10 Z"></path></svg>
      <div className="bg-black flex flex-col justify-center items-center text-white">
        <div className="flex justify-between flex-col md:flex-row w-[90%] items-center px-10 mt-7 py-4">
          <div className="flex items-center">
            <img src={logo} alt="Dann Good Coffee" className="h-20" />
            
          </div>
          <div className="flex  space-x-8 mt-8 mb-8">
            <Link to="#" className="hover:text-orange-700 ">
              MENU
            </Link>
            <Link to="#" className="hover:text-orange-700">
              SHOP
            </Link>
            <Link to="#" className="hover:text-orange-700">
              ABOUT
            </Link>
            <Link to="#" className="hover:text-orange-700">
              ORDER
            </Link>
          </div>
          <div className="flex space-x-4 justify-center ">
            <Link to="https://www.linkedin.com/in/navinchaudhary9/" className="li1 ">
            <FaLinkedin className="h-8"/>
            </Link>
            <Link to="https://x.com/NavinChaud24674" className=" li2 hover:underline">
            <FaSquareXTwitter className="h-8"/>
            </Link>
            <Link to="mailto:navinchaudhary915715@gmail.com" className="li3 hover:underline">
            <MdEmail className="h-8"/>
            </Link>
            <Link to="https://www.instagram.com/navin_chaudhary_05/" className="li4 hover:underline">
            <FaInstagramSquare className="h-8"/>
            </Link>
            <Link to="callto:+91 9157154504" className="li5 hover:underline">
            <IoCall className="h-8"/>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="text-sm text-white  flex flex-col md:flex-row gap-5 justify-center mt-20 mb-20">
          &copy; 2024 Dann Good Coffee 
          <Link href="#" className="hover:underline hover:text-[#016664]">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline hover:text-[#016664]">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline hover:text-[#016664]">
            Coffee Settings
          </Link>
        </div>
        </div>
        <img
          src={Heroimages1}
          loading="lazy"
          alt="That's Dann Good"
          className="footer4_tagline"
        ></img>
      </div>
    </>
  );
}

export default Footer;
