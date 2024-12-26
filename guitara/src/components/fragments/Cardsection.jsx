import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Cardsection() {
  useGSAP(() => {
    gsap.set(".card-box", { opacity: 0 });
    ScrollTrigger.create({
      trigger: ".card-box", // Element to trigger the animation
      start: "top 70%", // When the top of the element reaches 80% of the viewport
      end: "50% 50%",
      scrub: 1,
      once: true,
      onEnter: () => {
        gsap.fromTo(
          ".card-box",
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

  const data = [
    {
      icon: "ri-box-3-line",
      title: "Fast Shipping",
      subTitle: "Order Over $1000.00"
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "Big Cashback",
      subTitle: "Over 40% Cashback"
    },
    {
      icon: "ri-qr-scan-2-line",
      title: "Quick Payment",
      subTitle: "100% Secure"
    },
    {
      icon: "ri-customer-service-2-line",
      title: "24/7 Support",
      subTitle: "Ready For You"
    }
  ]
  return (
    <div className='flex gap-4'>
      {
        data.map((elm, i) => {
          return (
            <div key={i} className='card-box py-20 rounded-3xl bg-[#2A201F] flex items-center justify-center gap-6 flex-grow'>
              <div>
                <i className={`${elm.icon} text-8xl`}></i>
              </div>
              <div>
                <div className='text-3xl'>{elm.title}</div>
                <div className=' text-lg text-gray-400'>{elm.subTitle}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cardsection