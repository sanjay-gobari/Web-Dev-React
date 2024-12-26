import React, { useRef } from 'react'
import Cardsection from './Cardsection'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section1() {

    const boxRef = useRef()
    const titleRef = useRef()
    const subTextRef = useRef()

    useGSAP(() => {
        gsap.set([boxRef.current, titleRef.current, subTextRef.current], { opacity: 0 });
        ScrollTrigger.create({
            trigger: [boxRef.current, titleRef.current], // Element to trigger the animation
            start: "top 80%", // When the top of the element reaches 80% of the viewport
            end: "50% 50%",
            scrub: 1,
            once: true,
            onEnter: () => {
                gsap.fromTo(
                    [boxRef.current, titleRef.current],
                    { opacity: 0 },
                    {
                        opacity: 1, // End with opacity 1
                        duration: 2,
                    }
                );
            }
        })
        ScrollTrigger.create({
            trigger: subTextRef.current,
            start: "top 85%",
  
            scrub: 1,
            once: true,
            onEnter: () => {
                gsap.fromTo(
                    subTextRef.current,
                    { opacity: 0 },
                    {
                        opacity: 1, // End with opacity 1
                        duration: 2,
                    }
                );
            }
        })
    })
    return (
        <>
            <div className='min-h-[900px] py-[80px] flex flex-col justify-center gap-[100px]'>
                <div className='flex'>
                    <div className='w-1/2 flex items-center'>
                        <div ref={boxRef} className='w-[560px] h-[440px] bg-slate-50 rounded-2xl'></div>
                    </div>
                    <div className=' w-3/6 flex flex-col justify-between '>
                        <div ref={titleRef}>
                            <h2 className='text-3xl pb-4'>about us</h2>
                            <h4 className='text-[5rem] line leading-[6rem]'>We Are The Best <br></br> Guitars Store in Town</h4>
                        </div>
                        <div  className='flex justify-between w-full'>
                            <div className='w-1/2 flex flex-col items-start justify-between'>
                                <p>Would you like to take a look at our products?</p>
                                <button className='rounded-full px-2 py-1 bg-yellow-300 text-black'>Open Store</button>
                            </div>
                            <div ref={subTextRef} className='w-1/2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero error nam dicta culpa tempore maxime quos mollitia, repudiandae reiciendis eos provident asperiores voluptatum enim, suscipit hic sequi saepe dolores.
                            </div>
                        </div>
                    </div>
                </div>
                <Cardsection />
            </div>
        </>
    )
}

export default Section1