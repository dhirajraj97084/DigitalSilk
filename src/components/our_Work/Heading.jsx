import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { BiSolidRadio } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
function Heading() {
  return (
    <div>
      <div className="main flex flex-col justify-center pt-6 px-3 py">
        <div className="box">
            <h1 className='text-white text-center font-bold  md:text-xl'>OUR WORK</h1>
            <h1 className='text-4xl pb-5 md:pb-3 text-white text-center font-semibold md:text-5xl'>Featured Website Design Projects</h1>
            <h2 className='text-2xl pb-5 md:pb-3 text-white text-center font-semibold'>Custom B2C, B2B and eCommerce solutions</h2>
            <h3 className='text-2xl md:text-3xl md:pb-2 pb-6 text-white text-center font-semibold'>optimized for traffic, engagement and conversion.</h3>
        </div>
        <div className="box2 ">
            {/* mobile */}
           <div className="button md:hidden">
              <button>

              </button>
           </div>
           {/* desktop */}
           <div className="desktop hidden md:block mt-10">
              <div className="item flex justify-center gap-14">
                 <button className='px-10 rounded-md py-10 bg-white text-indigo-500'>
                 <FaStar className='pb-2 text-4xl mx-auto' />
                 <span className='pb-1 text-xl text-indigo-500 py-2'>FEATURED</span>
                 <FaAngleDown className='pb-1 text-4xl text-indigo-500 mx-auto' />
                 </button>
                 <button className='px-10 rounded-md py-10 text-white '>
                 <FaHandshake className='pb-2 text-4xl mx-auto' />
                 <span className='pb-1 text-xl text-white py-2'>B2B</span>
                 
                 </button>
                 <button className='px-10 rounded-md py-10 text-white '>
                 <BiSolidRadio className='pb-2 text-4xl mx-auto' />
                 <span className='pb-1 text-xl text-white py-2'>B2C</span>
                
                 </button>
                 <button className='px-10 rounded-md py-10 text-white '>
                 <BsCartFill className='pb-2 text-4xl mx-auto' />
                 <span className='pb-1 text-xl text-white py-2'>ECOMMERCE</span>                 
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
