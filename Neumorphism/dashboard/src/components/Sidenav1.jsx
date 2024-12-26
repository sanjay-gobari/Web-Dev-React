import React from 'react'

function Sidenav1() {
  return (
    <div className='neu-effect-1 p-2 py-8 flex flex-col justify-between gap-10 rounded-lg'>
      <ul className='flex flex-col gap-5 text-lg'>
        <li className='neu-effect-1 w-[42px] h-[42px] all-center rounded-lg'><i className="ri-layout-4-line"></i></li>
        <li className='neu-effect-1 w-[42px] h-[42px] all-center rounded-lg'><i className="ri-bar-chart-box-line"></i></li>
        <li className='neu-effect-1 w-[42px] h-[42px] all-center rounded-lg'><i className="ri-calendar-2-line"></i></li>
        <li className='neu-effect-1 w-[42px] h-[42px] all-center rounded-lg'><i className="ri-group-line"></i></li>
        <li className='neu-effect-1 w-[42px] h-[42px] all-center rounded-lg'><i className="ri-settings-4-line"></i></li>
      </ul>
      <div className='neu-effect-1 w-[42px] h-[42px] all-center rounded-lg'>
        <i className="ri-logout-box-r-line"></i>
      </div>
    </div>
  )
}

export default Sidenav1