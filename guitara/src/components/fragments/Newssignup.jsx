import React from 'react'

function Newssignup() {
    return (
        <div className='flex flex-col items-center py-20 gap-10'>
                    <div className='w-1/3'>
                        <p className='text-6xl text-center'>Sign Up To Our Newsletter</p>
                    </div>
                    <div className='w-1/3  flex flex-col gap-4 items-center'>
                        <p className='text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quam.</p>
                        <div className='border w-full rounded-full flex justify-between  '>
                            <input className='px-4 py-4 bg-transparent outline-none' type="text" placeholder='Your Email' />
                            <button className='bg-white text-black rounded-full p-2 px-4'>
                                <p className='px-2'>Subscribe</p>
                            </button>
                        </div>
                    </div>
                </div>
    )
}

export default Newssignup