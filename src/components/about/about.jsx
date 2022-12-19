import React from 'react'
import "./about.css";
import Me from "../../assets/me.jpeg"
import{GiAchievement} from 'react-icons/gi'
import{MdOutlineLibraryBooks} from 'react-icons/md'
import{MdCastForEducation} from 'react-icons/md'
const about = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="About img" id='imgme2' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
           <a href='#experience'> <article className="about__card">
              <GiAchievement className='about__icon'/>
              <h5>experience</h5>
            </article></a>
            <article className="about__card">
              <MdOutlineLibraryBooks className='about__icon'/>
              <h5>Projects</h5>
            </article> 
            <article className="about__card">
              <MdCastForEducation className='about__icon'/>
              <h5>Education</h5>
            </article> 
          </div>
          <p>
          Hi, I’m Sanjana! I'm a web developer with in-depth experience in UI/UX design. In a nutshell, I create websites that help organizations address business challenges and meet their needs. I manage everything from website navigation and layout to a company's web hosting and security architecture. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS. I’m a lifelong learner (currently taking a course on building AI chatbots with Python!) and love to read, run, and find new bubble tea shops in New York City.
          </p>
        </div>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
      </div>
    </section>
  )
}

export default about 