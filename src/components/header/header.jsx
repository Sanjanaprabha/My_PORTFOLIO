import React from 'react'
import "./header.css";
import CTA from './CTA';
import Me from '../../assets/me.jpeg'
import HeaderSocials from './headersocials';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>hello I'm</h5>
        <h1>Sanjana Prabha</h1>
        <h5 className='text-light'>full Stack web developer</h5>
        <CTA/>
        <HeaderSocials/>
         <div className="me">
            <img src={Me} alt="me" />
         </div>
         <a href="#footer" className='scroll_down'><BsFillArrowRightCircleFill size={40}/></a>
      </div>
    </header>
  )
}

export default Header 