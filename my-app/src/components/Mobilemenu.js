import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useNavigate } from "react-router-dom";


const Mobilemenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

    let navigate = useNavigate();
    const modelHandler = () => {
        navigate("/model");
      };
      const aboutHandler = () => {
        navigate("/about");
      };
      const bikeaImgHandler = () => {
        navigate("/home");
      };
      
  return (
    <div className="relative inset-0 flex z-100">
      {/* Background overlay */}
      <Transition
        show={isOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0  bg-black opacity-50"
        aria-hidden={isOpen ? 'false' : 'true'}
      ></Transition>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transform translate-x-full transition-transform duration-300 ease-in-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform translate-x-full transition-transform duration-300 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed inset-y-0 right-0 w-64 h-[40%] bg-white shadow-lg overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col justify-center py-20 items-center align-middle">
          {/* Your menu items go here */}
          {/* <ul>
            <li>
              <a href="#">Menu Item 1</a>
            </li>
            <li>
              <a href="#">Menu Item 2</a>
            </li>
            <li>
              <a href="#">Menu Item 3</a>
            </li>
          </ul> */}


          {/* Reused */}

          <div className="flex flex-col gap-x-0 md:gap-x-1 flex-grow">
            <button
              onClick={bikeaImgHandler}
              className="hover:cursor-pointer  rounded-lg px-4 py-2 md:py-1 transition-all duration-100"
             >
          Home
           </button>
        <button
          onClick={modelHandler}
          className="hover:cursor-pointer  rounded-lg px-4 py-2 md:py-1 transition-all duration-100"
        >
          Model
        </button>

        <button
          onClick={aboutHandler}
          className="hover:cursor-pointer rounded-lg px-4 py-2 md:py-1 transition-all duration-100"
        >
          About
        </button>
        
      </div>
      
        </div>
      </Transition>

      {/* Hamburger icon */}
      <button
        onClick={toggleMenu}
        className="relative  z-50 p-2 rounded-md"
        aria-label="Toggle mobile menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Mobilemenu;

