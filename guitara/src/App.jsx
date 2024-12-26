import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Home from "./components/Home"
import Notfound from './components/Notfound';
import Shop from './components/Shop';
function App() {
  const [animationStatus, setAnimationStatus] = useState(true);

  useEffect(() => {
    setAnimationStatus(false);
    console.log("deactivated")
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home animeStatus={animationStatus} />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router >

    </>
  )
}

export default App 