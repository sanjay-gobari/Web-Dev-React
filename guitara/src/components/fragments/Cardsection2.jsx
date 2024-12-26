import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cardsection2() {

  const data = [
    {
      title: "Do you want an individual guitar?",
    },
    {
      title: "Exclusive Guitar",
    },
    {
      title: "Premium Guitar",
    },
  ]

  useGSAP(() => {
    gsap.set(".card-box-2", { opacity: 0 });
    ScrollTrigger.create({
      trigger: ".card-box-2", // Element to trigger the animation
      start: "top 80%", // When the top of the element reaches 80% of the viewport
      end: "50% 50%",
      scrub: 1,
      once: true,
      onEnter: () => {
        gsap.fromTo(
          ".card-box-2",
          { opacity: 0 },
          {
            opacity: 1, // End with opacity 1
            duration: 1.5,
            stagger: 0.2
          }
        );
      }
    })
  })
  return (
    <div className='flex gap-10'>
      {
        data.map((elm, i) => {
          return (
            <div key={i} className='card-box-2 h-[360px] w-full bg-[#2A201F] rounded-3xl p-8 flex flex-col justify-between'>
              <p className='text-5xl'>{elm.title}</p>
              <button className='rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition text-black p-2 flex items-center gap-4 self-end'>
                <p className='px-2 text-lg'>Explore More</p>
                <div className='bg-black rounded-full w-[3rem] h-[3rem] text-xl text-white flex items-center justify-center'>
                  <i className="ri-arrow-right-line text-inherit"></i>
                </div>
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cardsection2