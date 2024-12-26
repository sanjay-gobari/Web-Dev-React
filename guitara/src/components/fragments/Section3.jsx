import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section3() {

    useGSAP(() => {
        gsap.set(".card-box3", { opacity: 0 });
        ScrollTrigger.create({
            trigger: ".card-box3", // Element to trigger the animation
            start: "top 50%", // When the top of the element reaches 80% of the viewport
            end: "50% 50%",
            scrub: 1,
            once: true,
            onEnter: () => {
                gsap.fromTo(
                    ".card-box3",
                    { opacity: 0,translateY:"10%" },
                    {
                        opacity: 1, // End with opacity 1
                        duration: 0.8,
                        translateY:"0%",
                        stagger: 0.1
                    }
                );
            }
        })
    })
    return (
        <div className='py-20 space-y-16'>
            <div>
                <p className='text-3xl'>Best Sellers</p>
                <p className='text-6xl'>Ready to find your<br></br>prefect guitar?</p>
            </div>
            <div className='flex gap-20'>
                <div className='p-10 space-y-10  w-full max-w-[460px] min-w-[360px] h-[600px] bg-white rounded-3xl '>
                    <div className='font-bold'>
                        <p className='text-black text-4xl'>Transparent Jbanez</p>
                        <p className='text-gray-700 text-2xl'>Limited Edition</p>
                    </div>
                    <div>
                        <p className='text-black font-bold text-3xl'>$5,400.00</p>
                        <button className='bg-black hover:text-white transition cursor-pointer text-gray-100 rounded-full p-2 flex items-center' >
                            <p className='px-2'>View Details</p>
                            <div className='bg-gray-100 text-black hover:bg-white transition rounded-full w-[2rem] h-[2rem] grid place-items-center'>
                                <i className="ri-arrow-right-line text-lg"></i>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-between'>
                    <div className='flex justify-around gap-10'>
                        <div className='card-box3 max-w-[360px] w-[260px] h-[480px] bg-[#2A201F] rounded-3xl flex-grow'></div>
                        <div className='card-box3 max-w-[360px] w-[260px] h-[480px] bg-[#2A201F] rounded-3xl flex-grow'></div>
                        <div className='card-box3 max-w-[360px] w-[260px] h-[480px] bg-[#2A201F] rounded-3xl flex-grow'></div>
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='space-x-4'>
                            <button className='border border-gray-600 hover:border-white transition rounded-full w-[3rem] h-[3rem]'>
                                <i className="ri-arrow-left-line text-xl"></i>
                            </button>
                            <button className='border border-gray-600 hover:border-white transition rounded-full w-[3rem] h-[3rem]'>
                                <i className="ri-arrow-right-line text-xl"></i>
                            </button>
                        </div>
                        <button className='bg-gray-300 font-bold hover:bg-white transition cursor-pointer text-black rounded-full p-2 ' >
                            <p className='px-2'>Open Store</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3