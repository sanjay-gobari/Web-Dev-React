import React from 'react'
import Cardsection2 from './Cardsection2'

function Section2() {
  return (
    <div className='space-y-10 py-10'>
      <div className='flex py-4 items-center'>
        <div className='min-w-[50%] space-y-4'>
          <p className='text-4xl'>offers</p>
          <p className='text-7xl'>In addition to our wide selection of guitars</p>
        </div>
        <div className='h-[500px] w-full bg-slate-100 rounded-3xl'>
        </div>
      </div>
        <Cardsection2/>
      
    </div>
  )
}

export default Section2