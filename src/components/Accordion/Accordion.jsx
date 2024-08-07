import React, { useState } from "react";

export function Accordion(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#f9f8f8]   rounded-lg shadow-md p-6 hover:text-orange-700">
      <div
        className="flex justify-between h-4  transition-transform hover:text-orange-700 duration-700 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className=" lg:text-2xl hover:text-orange-700 font-extrabold ">
          
          {props.title}
        </h2>
        <svg
          className={`transition-transform duration-300 hover:text-orange-700 w-10 ${
            open ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
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
      {open && (
        <p className="mt-3 text-sm text-gray-600">
          {props.value}
        </p>
      )}
    </div>
  );
}

export default Accordion;
