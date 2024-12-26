import React from 'react'

function Section2() {
  return (
    <div className='min-h-[100vh] pt-10'>
      <div className='flex gap-2'>
        <div className='rounded-xl bg-[#eaeccc] w-fit p-3 px-4'>
          Technologies
        </div>
        <div className='rounded-xl text-white bg-[#121212] w-fit p-3 px-4'>
          Solutions
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-7xl font-semibold max-w-[1400px]'>OUR MISSION IS TO CREATE A SUSTAINABLE WORLD BY LEADING IN GREEN TECHNOLOGY INNOVATION. <br /> WITH A VISION OF REDUCING HUMANITY'S IMPACT ON THE PLANET,WE WORK TOWARD SOLUTIONS THAT SUPPORT A CLEANER, MOR RESILIENT FUTURE FOR ALL</p>
      </div>
      <div className=' mt-10 flex items-center justify-between'>
        <div className='w-[100px] h-[100px] rounded-md bg-gray-300'></div>
        <p className=' max-w-[500px] text-xl'>Our innovative green technologies pave the way for energy efficiency, resource conservation and environment restoration.</p>
      </div>
    </div>
  )
}

export default Section2