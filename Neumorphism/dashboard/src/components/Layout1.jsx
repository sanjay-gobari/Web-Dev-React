import React from 'react'
import Sidenav1 from './Sidenav1'
import Cards1 from './Cards1'
import Table1 from './Table1'
import Cards2 from './Cards2'
import Sidebar2 from './Sidebar2'
import Sidebar3 from './Sidebar3'

function Layout1() {
  return (
    <div className='flex gap-10 w-full'>
      <Sidenav1 />
      <div className='flex flex-col gap-10'>
        <Cards1 />
        <Table1 />
        <Cards2 />
      </div>
      <div className='flex flex-col justify-between w-full'>
        <Sidebar2 />
        <Sidebar3 />
      </div>
    </div>
  )
}

export default Layout1