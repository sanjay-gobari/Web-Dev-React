import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Hero() {
  const listdata = ["#steel", "#wooden", "#patern", "#vintage", "#leather", "#print"]
  const heroLeftRef = useRef();
  const heroLeftPRef = useRef();
  const heroRightVideoRef = useRef();
  const heroRightItemRef = useRef();
  useGSAP(() => {
    gsap.fromTo(heroLeftRef.current,
      { translateX: "-100%", opacity: 0 },
      {
        duration: 0.8,
        translateX: 0,
        opacity: 1,

      }
    )
    gsap.fromTo(heroLeftPRef.current,
      { opacity: 0 },
      {
        duration: 3,
        opacity: 1,
        delay: 0.8

      }
    )
    gsap.fromTo(heroRightVideoRef.current,
      { opacity: 0, translateY: "-10%" },
      {
        duration: 1,
        opacity: 1,
        translateY: 0,


      }
    )
    gsap.fromTo(".sideItem",
      { opacity: 0 },
      {
        duration: 0.5,
        opacity: 1,
        delay: 0.5,
        stagger: 0.1

      }
    )
  })
  return (
    <>

      <div>
        <div className='flex justify-between h-[800px] '>
          <div className='hero-left min-w-1/2'>
            <div ref={heroLeftRef} className='text-8xl h-2/3 flex items-center '>
              Harmony of<br></br>Craftsmanship<br></br>and Melody
            </div>
            <div ref={heroLeftPRef} className=' space-y-4 max-w-[400px]'>
              <p >
                The harmony of craftsmanship and melody is where art and soul converge, creating a symphony of human expression. It is the union of skilled hands and heartfelt rhythm, where every crafted detail resonates with emotion, and every note reflects dedication.
              </p>
              <button className='border border-slate-100 rounded-full px-4 py-2 bg-yellow-300 text-slate-950'>
                Explore More
              </button>
            </div>
          </div>
          <div className='p-2 hero-right max-w-[350px] flex flex-col justify-center gap-16'>
            <div ref={heroRightVideoRef} className='p-2 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-400 flex flex-col gap-2 rounded-lg '>
              <div className=' bg-slate-100 w-full h-[150px] rounded'></div>
              <div className='flex justify-between items-center'>
                <div>
                  <p>Limited Edition Guitar</p>
                  <p>$340</p>
                </div>
                <button className='rounded-full bg-slate-300 hover:bg-slate-50 transition w-[36px] h-[36px] text-slate-950 text-xl'>
                  <i className="ri-arrow-right-line text-inherit"></i>
                </button>
              </div>
            </div>
            <ul ref={heroRightItemRef} className='flex flex-wrap justify-center gap-2 text-lg tracking-wide'>
              {
                listdata.map((elm, i) => {
                  return (<li className='sideItem border border-slate-500 rounded-full px-3 py-1 text-inherit cursor-pointer transition hover:border-slate-100 backdrop-blur-sm' key={i}>{elm}</li>)
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero