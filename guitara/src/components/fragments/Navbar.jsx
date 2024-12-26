import React, { useRef, useState } from 'react'
import "./cstyle.css"
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Navbar(props) {
    const [isInitialLoad, setIsInitialLoad] = useState(props.animate);
    const listdata = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Sales",
            link: "#"
        },
        {
            title: "Store",
            link: "/shop"
        },
        {
            title: "Blog",
            link: "#"
        },
        {
            title: "Contact",
            link: "#"
        }
    ]
    const navRef = useRef()
    const navItemRef = useRef()
    useGSAP(() => {
        if (isInitialLoad) {
        gsap.fromTo(navRef.current,
            { translateY: "-100%" }, 
            {
                duration: 0.4, 
                translateY: 0,
                ease:"back",
            }
        )
        gsap.fromTo(navRef.current,
            { width: "56px"},
            {
                width: "auto", 
                duration: 0.5, 
                ease: "power2.inOut", 
                delay: 0.3
            }
        )
        gsap.fromTo(navItemRef.current,
            { opacity: 0 }, 
            {
                opacity: 1,
                duration: 1, // Animation duration in seconds
                delay: 1,
            }
        )
        setIsInitialLoad(false);
    }
    })
    return (
        <nav className='flex justify-between items-center py-6 '>
            <div className='text-6xl logohead'>Guitara</div>
            <div ref={navRef} className=' overflow-hidden border border-slate-100 rounded-full'>
                <ul ref={navItemRef} className='flex gap-6  p-2 '>
                    {
                        listdata.map((elm, i) => {
                            if (props.activePage.toLowerCase() === elm.title.toLowerCase()) {
                                return (<li key={i} className='leading-none'>
                                    <Link className='block text-lg rounded-full px-3 py-1 nav-items nav-item-active' to={elm.link}>{elm.title}</Link>
                                </li>)
                            }
                            else {
                                return (<li key={i} className='leading-none'>
                                    <Link className='block text-lg rounded-full px-3 py-1 nav-items' to={elm.link}>{elm.title}</Link>
                                </li>)
                            }
                        })
                    }
                </ul>
            </div>
            <div className='flex gap-2 items-center'>
                <button className='flex items-center gap-1 bg-slate-100 rounded-full px-4 py-2'>
                    <span className='text-slate-950'>signup</span>
                    <div className='p-1 w-[32px] h-[32px] rounded-full bg-slate-900'>
                        <i className="ri-user-line text-inherit"></i>
                    </div>
                </button>
                <button className='border border-slate-100 rounded-full w-[48px] h-[48px] text-2xl'>
                    <i className="ri-shopping-cart-2-line text-inherit"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar