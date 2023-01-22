import React from 'react'
import "./services.css";
import {BiStar} from 'react-icons/bi'
import Certi1 from '../../assets/Sanjana_Prabha_certificates.pdf'
import Certi2 from '../../assets/sanjana_hobbies_certificate.pdf'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(()=>{
    AOS.init({
      duration:800,
     
    })
   })
  return (
    <section id="services">
      <h2>Education,courses and hobbies</h2>
      <div className="container services__container">
        <article className='service'data-aos="fade-up">
          <div className="service__head" >
          <h3>Courses Certifications </h3>
          </div>

          <ul className="service__list">
            <li>
            <BiStar className="service__list-icon"/>
            <p>JP Morgan Chase virtual internship Experience.</p>
            </li>
            <li>
            <BiStar className="service__list-icon"/>
            <p>Google Developer Group, Node Js and MongoDB Bootcamp .</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Microsoft Student ambassader certificate.</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Coursera Frontend web UI framework using Bootstarp.</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Other linked-in,Udemy and scaler course completion</p>
            </li>
            <li>
              <a href={Certi1} download className='btn btn-primary'>View Certificates</a>
            </li>
          </ul>
</article>

{/* --------------education------------------ */}
<article className='service'data-aos="fade-down">
          <div className="service__head" >
          <h3>My Eductaion </h3>
          </div>

          <ul className="service__list">
            <li>
            <BiStar className="service__list-icon"/>
            <p>University: Chandigarh University</p>
            </li>
            <li>
            <BiStar className="service__list-icon"/>
            <p>Course: B.E </p>
            </li>
            <li>
            <BiStar className="service__list-icon"/>
            <p>Branch: Computer Science Engineering</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>School: Rotary Public School</p>
            </li>
          </ul>
</article>
{/* --------extracuricular hobbies--------------------------- */}


<article className='service'data-aos="fade-down">
          <div className="service__head" >
          <h3>My Hobbies & Certificates </h3>
          </div>

          <ul className="service__list">
            <li>
            <BiStar className="service__list-icon"/>
            <p>Digital Marketing in Social Media.</p>
            </li>
            <li>
            <BiStar className="service__list-icon"/>
            <p>State level Singing competition Winner.</p>
            </li>
            <li>
            <BiStar className="service__list-icon"/>
            <p>Awarded Best Singer in School.</p>
            </li>
            <li>
            <BiStar className="service__list-icon"/>
            <p>Music Youtube Channel</p>
            </li>
            <li><a href="https://www.youtube.com/@sanjanaprabha7100/featured"><h5>visit channel</h5></a></li>
            <li> 
              <a  href={Certi2} download className='btn btn-primary'>View Certificates</a>
            </li>
          </ul>
</article>

      </div>
    </section>
  )
}

export default Services 