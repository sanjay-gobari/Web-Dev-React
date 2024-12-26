import React from 'react'
import { Link } from 'react-router-dom'

function Section4() {
  return (
    <div className='relative  mt-40 '>
      <div className='h-[360px] rounded-3xl tly'>img</div>
      <div className='flex items-center'>
        <div className='space-y-10 w-2/3 py-4'>
          <p className='text-4xl'>Developing groundbreaking <br /> technologies for a greener future.
          </p>
          <Link to="#" className='block underline'>Find Out More</Link>
        </div>
        <div className='text-[18rem] font-bold'>
          <p className='leading-none'>Nature</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>GreenMotive</div>
        <div>
          <input type="text" className='min-w-[400px] bg-[#121212] text-white p-3 px-5 rounded-xl mr-4 ' placeholder='Enter your Email' />
          <button className='bg-[#eaeccc] p-3 px-5 rounded-xl'>Request</button>
        </div>
      </div>
      <footer className='mt-8 p-1 text-center -ml-24  text-white bg-[#121212] w-[calc(100vw-8px)] '>
        All Right Reserved &copy; {new Date().getFullYear().toString()}
      </footer>
    </div>
  )
}

export default Section4