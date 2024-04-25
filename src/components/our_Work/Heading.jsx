import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
function Heading() {
  return (
    <div>
      <div className="main flex flex-col justify-center py-6 px-3 py">
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
           <div className="desktop hidden md:block">
              <div className="item">
                 <button className='px-16 py-16 bg-white'>
                 <FaStar className='pb-2' />
                 <span className='pb-1'>FEATURED</span>
                 <FaAngleDown className='pb-1' />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
