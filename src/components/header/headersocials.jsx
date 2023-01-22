import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {VscGithub} from 'react-icons/vsc'
import {RiInstagramFill} from 'react-icons/ri'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/sanjana-prabha-692764220/" target="#_blank"><SiLinkedin size={25}/></a>
        <a href="https://github.com/Sanjanaprabha" target="#_blank"><VscGithub size={25}/></a>
        <a href="https://www.instagram.com/sanjanaprabha/?igshid=ZDdkNTZiNTM%3D" target="#_blank"><RiInstagramFill size={25}/></a>
    </div>
  )
}

export default HeaderSocials