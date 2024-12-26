import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Hero() {
  const boxref = useRef()
  useGSAP(() => {
    gsap.fromTo(boxref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease:'power3.out'
      }
    )
})
  return (
    <div ref={boxref} className='relative pt-10 space-y-40 min-h-[100vh] '>
      <div className='flex flex-col gap-8'>
        <div className='rounded-xl bg-[#eaeccc] w-fit p-3 px-4'>
          Project Green
        </div>
        <p className='text-7xl font-semibold text-white'>
          EMPOWERING<br />SUSTAINABLE<br />PROGRESS
        </p>
        <div className='flex items-center gap-16'>
          <div className='border border-[#dddfc0] w-40 h-40 p-10 rounded-xl flex items-center'>
            <svg className=' ' viewBox='0 0 16 16' style={{ fill: "none", stroke: "#121212", strokeWidth: 0.2 }}>
              <path d='M 0 6 L 4 2 L 8 6 L 12 2 L 16 6 L 8 14 L 0 6 M 6 12 L 14 4 M 2 4 L 8 10' ></path>
            </svg>
          </div>
          <Link to="#" className='hover:underline'>Find Out More</Link>
        </div>
      </div>
      <div className='flex items-center gap-10'>
        <p className='text-4xl font-semibold text-white'>Our innovative green technologies <br /> pave the way for energy efficiency</p>
        <div className='flex gap-1'>
          <span className='leading-none self-center min-w-12 min-h-12 border rounded-full border-gray-500 grid place-items-center'>01</span>
          <span className='leading-none self-center min-w-12 min-h-12 border rounded-full border-gray-500 grid place-items-center'>02</span>
          <span className='leading-none self-center min-w-12 min-h-12 border rounded-full border-gray-500 grid place-items-center'>03</span>
        </div>
      </div>
    </div>
  )
}

export default Hero