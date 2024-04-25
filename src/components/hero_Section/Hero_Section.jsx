import React from 'react'
import { FaCaretRight } from "react-icons/fa6";
import MovingBackground from './MovingBackground';
import Web_agency from './Web_agency';
import Heading from '../our_Work/Heading';



function Hero_Section() {
  return (
    <div className='bg-gradient-to-t to-[#418ae9] from-black/85 h-fit'>
      <div className="main_hero flex justify-center py-8 ">
        <div >
            {/* text */}
         <h2 className='text-center text-2xl text-white pt-12 pb-4 font-bold text-pretty'>TOP WEB DESIGN AGENCY</h2>
         <h1 className='text-center text-6xl font-bold text-white pb-4'>WE GROW BRANDS ONLINE</h1>
         <h2 className='text-center text-2xl text-white pb-4'>CUSTOM WEBSITES, BRANDING & DIGITAL MARKETING SOLUTIONS</h2>
         {/* buttons */}
         <div className="button flex justify-center pt-8">
            <button className='flex gap-2 px-6 py-2 cursor-pointer items-center border bg-transparent hover:bg-[rgba(80,148,236,0.92)] border-blue-200 text-white'>
                <span>SPEAK WITH OUR EXPERTS</span>
                <span><FaCaretRight /></span>
            </button>
         </div>
        </div>       
      </div>
      <MovingBackground/>
     <Web_agency/>
     {/* <Heading/> */}
    </div>
  )
}

export default Hero_Section
