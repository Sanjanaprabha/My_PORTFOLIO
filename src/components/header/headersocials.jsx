import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {VscGithub} from 'react-icons/vsc'
import {RiInstagramFill} from 'react-icons/ri'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="http://linkedin.com" target="#_blank"><SiLinkedin size={25}/></a>
        <a href="http://github.com" target="#_blank"><VscGithub size={25}/></a>
        <a href="http://instagram.com" target="#_blank"><RiInstagramFill size={25}/></a>
    </div>
  )
}

export default HeaderSocials