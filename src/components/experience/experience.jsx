import React from 'react'
import "./experience.css";
import {FaCss3Alt} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {SiMongodb} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

const experience = () => {
  return (
    <section id="experience">
      <h2>My skillset</h2>
      <div className="container experience__container">
        <div className="experience__webd">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <AiFillHtml5 size={35}/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>experienced</small> 
              </div> 
            </article>
            <article className='experience__detail'>
              <FaCss3Alt size={35}/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <SiJavascript size={35}/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>intermediate</small>
              </div> </article>
            <article className='experience__detail'>
              <FaReact size={35}/><div>
              <h4>React Js</h4>
              <small className='text-light'>intermediate</small>
              </div> </article>
            <article className='experience__detail'>
              <IoLogoNodejs size={35}/><div>
              <h4>Node Js</h4>
              <small className='text-light'>experienced</small>
              </div> </article>
            <article className='experience__detail'>
              <SiMongodb size={35}/><div>
              <h4>Mongo DB </h4>
              <small className='text-light'>Basic</small>
              </div> </article>
          </div>
        </div>
        {/* second half */}
        <div className="experience_languages">
           <h3>Other Languages</h3>
           <div className="experience__content">
           <article className='experience__detail'>
              <FaJava size={35}/><div>
              <h4>JAVA</h4>
              <small className='text-light'>experienced</small>
              </div> </article>
            <article className='experience__detail'>
              <SiCplusplus size={35}/><div>
              <h4>C/C++</h4>
              <small className='text-light'>experienced</small>
              </div></article>
            <article className='experience__detail'>
              <SiPython size={35}/><div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
              </div></article>
            <article className='experience__detail'>
              <GrMysql size={35}/><div>
              <h4>MY SQL</h4>
              <small className='text-light'>intermediate</small>
              </div></article>
           </div>
        </div>
      </div>
    </section>
  )
}

export default experience 