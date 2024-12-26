import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './components/Home';
import Notfound from './components/Notfound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </Router >
    </>
  )
}
12
export default App