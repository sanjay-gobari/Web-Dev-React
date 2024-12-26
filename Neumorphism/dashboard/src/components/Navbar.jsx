import React from 'react'

function Navbar() {
  return (
    <nav className='my-4 p-4 flex justify-between neu-effect-1 rounded-lg'>
      <div>
        <ul className='flex gap-2'>
          <li className='neu-effect-2 p-2 px-4 rounded-lg cursor-pointer'>Dashboard</li>
          <li className='neu-effect-1 p-2 px-4 rounded-lg cursor-pointer'>Message</li>
          <li className='neu-effect-1 p-2 px-4 rounded-lg cursor-pointer'>Help</li>
        </ul>
      </div>
      <div>
        <ul className='flex gap-2 items-center'>
          <li className='neu-effect-1 w-[40px] h-[40px] all-center rounded-lg'><i className="ri-notification-2-line"></i></li>
          <li className='neu-effect-1 rounded-full w-[40px] h-[40px]'></li>
          <li className='neu-effect-1 p-2 px-4 rounded-full'>Profile Name</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar