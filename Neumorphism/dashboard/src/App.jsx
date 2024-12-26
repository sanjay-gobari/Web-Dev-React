import React from 'react'
import 'remixicon/fonts/remixicon.css'
import "./App.css"
import Navbar from './components/Navbar'
import Layout1 from './components/Layout1'
function App() {
  return (
    <div className='px-4 max-w-[1200px] m-auto'>
      <Navbar/>
      <Layout1/>
    </div>
  )
}

export default App