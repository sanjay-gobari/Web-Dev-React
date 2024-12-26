import React from 'react'
import {Link} from "react-router-dom"
function Notfound() {
    return (
        <div className='flex flex-col items-center justify-center h-[100vh] gap-6'>
            <p className='text-7xl'>404 </p>
            <p className='text-5xl'>Why are you here?</p>
            <Link to="/" className='bg-white text-black rounded-xl p-4 font-bold'>Go Home</Link>
        </div>
    )
}

export default Notfound