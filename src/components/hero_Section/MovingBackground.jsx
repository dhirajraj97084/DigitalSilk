import React from 'react'
import Slider from "react-slick";
import { motion } from 'framer-motion';

function MovingBackground() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  const setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    
    <motion.div animate={{rotate:-18}} className="slider-container mt-14 mx-8 lg:mx-14 py-3  opacity-75 h-screen">
    <Slider ani  {...settings} className='  '>
      <div className=''>
        <img className='w-[22em] h-[15em] opacity-90' src="https://images.pexels.com/photos/8939307/pexels-photo-8939307.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div>
        <img  className='w-[22em] h-[15em] opacity-90' src="https://images.pexels.com/photos/8939255/pexels-photo-8939255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div>
        <img className='w-[22em] h-[15em] opacity-90' src="https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div>
        <img className='w-[22em] h-[15em] opacity-90' src="https://media.istockphoto.com/id/1226781783/photo/girl-shopping-on-online-store-from-home.jpg?s=2048x2048&w=is&k=20&c=H8yYzd12AYVmY0eY7CGd4jrUy69jZOZZGaiZ71btna4=" alt="" />
      </div>
      <div>
        <img className='w-[22em] h-[15em] opacity-90' src="https://images.pexels.com/photos/5650046/pexels-photo-5650046.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>      
    </Slider>

    <Slider  {...setting} className=' mt-6 '>
      <div className=''>
        <img className='w-[22em] h-[15em] opacity-95 ' src="https://images.pexels.com/photos/8939307/pexels-photo-8939307.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div>
        <img  className='w-[22em] h-[15em] opacity-95' src="https://images.pexels.com/photos/8939255/pexels-photo-8939255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div>
        <img className='w-[22em] h-[15em] opacity-95' src="https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div>
        <img className='w-[22em] h-[15em] opacity-95' src="https://media.istockphoto.com/id/1226781783/photo/girl-shopping-on-online-store-from-home.jpg?s=2048x2048&w=is&k=20&c=H8yYzd12AYVmY0eY7CGd4jrUy69jZOZZGaiZ71btna4=" alt="" />
      </div>
      <div>
        <img className='w-[22em] h-[15em] opacity-95' src="https://images.pexels.com/photos/5650046/pexels-photo-5650046.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>      
    </Slider>
  </motion.div>
            
       
      
  
  )
}

export default MovingBackground
