import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
  const navRef = useRef();
  const handleMouseEnter = (e) => {
    const item = e.target.getBoundingClientRect();
    const navOffset = navRef.current.getBoundingClientRect();
      gsap.to(".highlight", {
        left: `${item.left - navOffset.left}px`,
        width: `${item.width}px`,
        duration: 0.3,
      })
  };
  useGSAP(()=>{

  },[])

  return (
    <nav className=" sticky top-0 left-0 w-full z-10 px-24 flex justify-between py-10 backdrop-blur-md">
      <div className="text-2xl flex items-center min-w-[240px]">GreenMotive</div>
      <div className="relative" ref={navRef} >
        <div className="highlight absolute h-2 bg-blue-500 bottom-0 transition-all"></div>
        <ul className="flex bg-[#121212] text-white gap-2 p-1 rounded-2xl items-center ">
          <li onMouseEnter={handleMouseEnter} className=" cursor-pointer px-5 py-3 bg-[#eaeccc] text-black rounded-xl">Home</li>
          <li onMouseEnter={handleMouseEnter} className=" cursor-pointer px-5 py-3">About</li>
          <li onMouseEnter={handleMouseEnter} className=" cursor-pointer px-5 py-3">Services</li>
        </ul>
      </div>
      <div className="flex gap-2 border-2 border-[#eaeccc] items-center rounded-2xl px-3">
        <div className=" rounded-full w-8 h-8 flex items-center justify-center bg-black text-white">
          <i className="ri-flashlight-line"></i>
        </div>
        <p>Renewable Energy Solutions</p>
      </div>
    </nav>
  )
}

export default Navbar