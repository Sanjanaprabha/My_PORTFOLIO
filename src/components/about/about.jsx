import React from 'react'
import "./about.css";
import Me2 from "../../assets/pic2.jpg"
import{GiAchievement} from 'react-icons/gi'
import{MdOutlineLibraryBooks} from 'react-icons/md'
import{MdCastForEducation} from 'react-icons/md'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
 useEffect(()=>{
  AOS.init({
    duration:800,
   
  })
 })
  
  return (

    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container" data-aos="fade-left">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me2} alt="About img" id='imgme2' />
          </div>
        </div>
        <div className="about__content" data-aos="fade-up">
          <div className="about__cards">
            <article className="about__card">
              <GiAchievement className='about__icon'/>
              <h5>experience</h5>
            </article>
            <article className="about__card">
              <MdOutlineLibraryBooks className='about__icon'/>
              <h5>Projects</h5>
            </article> 
            <article className="about__card">
              <MdCastForEducation className='about__icon'/>
              <h5>Hobbies & Skills</h5>
            </article> 
          </div>
          <p>
          Hi, I'm Sanjana! I'm a MERN stack web developer. I manage everything from website navigation and layout to a company's web hosting and security architecture. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS.
          other than that, I have in-depth knowledge in JAVA and intermediate in DSA skills I’m a lifelong learner (currently taking a course on blockchain development to understand WEB 3.0!) and love to  sing, draw and dance.
          </p>
        </div>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
      </div>
    </section>
  )
}

export default About 