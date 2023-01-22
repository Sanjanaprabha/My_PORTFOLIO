import React from 'react'
import "./nav.css";
import {FaHome} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import {useState} from 'react'


const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav==='#'?'active':''}><FaHome size={15}/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}className={activeNav==='#about'?'active':''}><BsPersonCircle size={15}/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')}className={activeNav==='#experience'?'active':''}><MdOutlineDesignServices size={15}/></a>
      <a href="#project" onClick={()=>setActiveNav('#project')}className={activeNav==='#project'?'active':''}><CgWebsite size={15}/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}className={activeNav==='#contact'?'active':''}><BiMessageDetail size={15} /></a>
    </nav>
  )
}
 
export default Nav 