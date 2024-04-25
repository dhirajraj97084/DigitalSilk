import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from 'react-router-dom';

function Web_agency() {
  return (
    <div>
      <div className="main">
        <div className="text pb-6">
          <h1 className='text-white text-center text-2xl md:text-4xl lg:text-6xl font-bold'>Creative Web Agency</h1>
          <h1 className='text-white text-center text-2xl md:text-4xl lg:text-6xl font-bold'>Delivering Custom Solutions</h1>
        </div>
        <div className="div   md:pt-16 px-4 lg:px-32">
          <div className="tree_items flex flex-wrap justify-center md:gap-14 gap-6 items-center text-white font-bold">
            <div>
              <h1 className='text-center'>Tailored Branding Strategies To <br /> Drive Engagement</h1>
            </div>
            <div>
              <h1 className='text-center'>Effective Marketing Campaigns <br /> To Generate Growth</h1>
            </div>
            <h1 className='text-center'>Custom Web Design Solutions To <br /> Drive Conversions</h1>
            
          </div>
          <hr className='mt-3 bg-slate-300 px-3' />
        </div>
        <div className="box2 flex flex-wrap justify-center gap-6 md:gap-28 py-6 md:py-8 font-bold">
          <div className="lrft flex gap-2">
          <svg id="logo-39" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z" fill="#A5B4FC" class="ccompli2"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z" fill="#4F46E5" class="ccustom"></path> <path d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z" fill="#A5B4FC" class="ccompli2" fill-opacity="0.3"></path> </svg>
          <div>
         <span className='text-white '>5 Star DesignRush <br /> Reviews</span>
         <div className="star flex gap-1 text-yellow-300">
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         </div>
         </div>
          </div>
          <div className="right text-white">
          <h1>Latest Web Design Award</h1>
          <h1 className='flex items-center'> <span><svg id="logo-35" width="35" height="20" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg></span> Web Design Award logo</h1>
          </div>
        </div>
        <div className="video  pb-6  ">
          <Link className='flex justify-center items-center gap-2' to={'https://www.digitalsilk.com/wp-content/uploads/2022/07/video.mp4'} >          
          <MdOutlineSlowMotionVideo className='text-indigo-500 text-6xl hover:text-blue-700 ' />
          <div className="div">            
            <h1 className='text-white  font-semibold cursor-pointer '>SEE OUR WORK</h1>
            <h2 className='text-white text-3xl font-bold cursor-pointer '>IN ACTION</h2>
            <h3 className='text-white text-sm font-bold cursor-pointer '>2 MINUTES</h3>
          </div>          
          </Link>
          {/* <hr className='my-6 bg-slate-300 px-12' />          */}
         
          </div>
      </div>
    </div>
  )
}

export default Web_agency
