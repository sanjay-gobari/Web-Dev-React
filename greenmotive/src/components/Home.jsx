import React, { useEffect, useRef } from "react";
import Navbar from './fragments/Navbar'
import Hero from './fragments/Hero'
import photo from '../assets/heroimg.jpg'
import Section2 from './fragments/Section2'
import Section3 from './fragments/Section3'
import Section4 from './fragments/Section4'
import { smoothScroll } from "./methods/smooth";

function Home() {
  const scrollRefW = useRef();

  useEffect(() => {
    const cleanup = smoothScroll(scrollRefW,{acce:0.2,friction:0.91})
    return()=>{
      cleanup();
    }
  }, []);



  return (
    <div ref={scrollRefW} className='relative max-w-[1920px] m-auto overflow-auto h-[100vh]'>
      <Navbar />
      <div className='  m-auto px-24 '>
        <div className='-z-10 absolute left-0 top-0 w-full h-[100vh] overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-black after:opacity-30'>
          <img className='w-full h-full object-cover scale-[1.4] ' src={photo} alt="" />
        </div>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  )
}

export default Home