import React from 'react'
import "./footer.css";
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {VscGithub} from 'react-icons/vsc'

const footer = () => {
  return (
   <footer id='footer'>
    <a href="#" className='footer__logo'>My Portfolio</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Skillset</a></li>
      <li><a href="#services">Hobbies</a></li>
      <li><a href="#project">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://www.instagram.com/sanjanaprabha/?igshid=ZDdkNTZiNTM%3D"><AiFillInstagram/></a>
      <a href="https://twitter.com/SanjanaPrabha3?t=bUENxdyl_TOSm-8dnuhRCQ&s=091qa"><AiFillTwitterCircle/></a>
      <a href="https://www.linkedin.com/in/sanjana-prabha-692764220/"><BsLinkedin/></a>
      <a href="https://github.com/Sanjanaprabha" target="#_blank"><VscGithub /></a>
    </div>

    <div className="footer__copyright">
        <small>&copy;Sanjana Prabha.All rights reserved</small>
    </div>
   </footer>
  )
}

export default footer 