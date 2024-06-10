import React, { useState } from 'react';
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { animate, delay, motion, transform } from 'framer-motion'; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


   

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-t from-[#418ae9] to-black/65 shadow-md border-b border-gray-50/65 top-0 sticky z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to={'/'}>
            <div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold cursor-pointer">
              DIGITALSILK
            </div>
            </Link>
          </div>
          <div className="">
            <div className="ml-4 flex gap-4 items-center md:ml-6">
              <div className="div">
                <div className="button hidden md:block">
                  <Link to={'/quote'}>
                  <button className='px-5 py-2 text-white font-semibold border border-gray-100 cursor-pointer'>REQUEST A QUOTE</button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className=" "
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>  

                  {!isOpen ? (<FaBarsStaggered className='text-4xl text-white' />) : (<FaX className='text-4xl text-white' />)}
                </button>
                {isOpen && (
                  <div
                    className="fixed top-0 left-0 w-full h-full bg-[#418ae9] z-50 flex justify-center items-center mt-16 "
                    onClick={toggleDropdown}
                  >
                    <div className="absolute  text-center rounded-md  bg-[#418ae9]">
                      <motion.div animate={{y:-100}} transition={{duration:0.5 , delay:0}} className="py-1" role="none">
                        <Link
                          to={'/'}
                          className="block px-4 py-2 my-4 text-2xl md:text-4xl underline underline-offset-8 decoration-lime-500 font-bold text-white "
                          role="menuitem"
                        >
                          <motion.h1 whileHover={{scale:0.8}} >Home</motion.h1>                        
                        </Link>
                        <Link
                          to={'service'}
                          className="block px-4 py-2 my-4 text-2xl md:text-4xl underline underline-offset-8 decoration-lime-500 font-bold text-white "
                          role="menuitem"
                        >
                          <motion.h1 whileHover={{scale:0.8}}> Services</motion.h1>
                         
                        </Link>
                        <Link
                          to={'/studies'}
                          className="block px-4 py-2 my-4 text-2xl md:text-4xl underline underline-offset-8 decoration-lime-500 font-bold text-white "
                          role="menuitem"
                        >
                             <motion.h1 whileHover={{scale:0.8}}> Case Studies</motion.h1>
                        
                        </Link>
                        <Link
                          to={'/digitaltrands'}
                          className="block px-4 py-2 my-4 text-2xl md:text-4xl underline underline-offset-8 decoration-lime-500 font-bold text-white "
                          role="menuitem"
                        >
                           <motion.h1 whileHover={{scale:0.8}}>Digital Trends</motion.h1>
                        
                        </Link>
                        <Link
                          to={'/about'}
                          className="block px-4 py-2 my-4 text-2xl md:text-4xl underline underline-offset-8 decoration-lime-500 font-bold text-white "
                          role="menuitem"
                        >
                           <motion.h1 whileHover={{scale:0.8}}> About</motion.h1>
                        
                        </Link>
                        <Link
                          to={'/contact'}
                          className="block px-4 py-2 my-4 text-2xl md:text-4xl underline underline-offset-8 decoration-lime-500 font-bold text-white "
                          role="menuitem"
                        >
                           <motion.h1 whileHover={{scale:0.8}}>  Contact</motion.h1>
                       
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
              <h1 className='text-2xl font-bold hidden md:block text-white'>MENU</h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
