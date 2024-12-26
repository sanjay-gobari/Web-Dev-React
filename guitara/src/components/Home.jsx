import React, { useEffect, useState } from 'react'
import Mainlayout from './Mainlayout';
import heroimg from "../assets/hero_img.jpg";
import Navbar from './fragments/Navbar'
import Hero from './fragments/Hero'
import Page1 from './fragments/Section1';
import Page2 from './fragments/Section2';
import Page3 from './fragments/Section3';
import Newssignup from './fragments/Newssignup';
import Footer from './fragments/Footer';
function Home(props) {


  return (
    <Mainlayout>
      <div className='relative -mx-20 px-20'>
        <div className='heroimg bg-cover bg-center'></div>
        <Navbar activePage="home" animate={props.animeStatus} />
        <Hero />
      </div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Newssignup />
      <Footer />
    </Mainlayout>
  )
}

export default Home