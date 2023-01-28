import React from 'react'
import "./project.css";
import Img1 from '../../assets/pro1.jpeg'
import Img2 from '../../assets/pro2.jpeg'
import Img4 from '../../assets/pro4.jpeg'
import Img5 from '../../assets/pro5.jpeg'
import Img6 from '../../assets/proC.png'
import Img7 from '../../assets/pro6.jpeg'

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const data =[
  {
    project: Img1,
    name: 'Dear Diary Website',
    disc:'This is a Virtual Dairy in which you can fill your entries and make a to-Do list, It is made using express JS, EJS.',
    gitLink:  "https://github.com/Sanjanaprabha/Dear-Dairy",
    weblink: ""
  },
  {
    project: Img7,
    name: 'Film Catch',
    disc:'This is a Movie Website made using React JS and Material UI , I have used Movie DB API it shows trending Movie & series with user rating',
    gitLink:  "https://github.com/Sanjanaprabha/movieWebsite_FilmCatch",
    weblink: "https://film-catch.netlify.app/"
  },
  {
    project: Img5,
    name: 'Notify',
    disc:'It is simple Note Making website built using React Js',
    gitLink:  "https://github.com/Sanjanaprabha/Notify",
    weblink: "https://notify22.netlify.app/"
  },
  {
    project: Img2,
    name: ' My Portfolio website',
    disc:'It is the portfolio website you are currently viewing, It is made using React-Js',
 

  },
  {
    project: Img4,
    name: 'Virtual Drum kit',
    disc:'It is a simple drum Stimulator made using HTML,CSS and Javascript',
    gitLink:  "https://github.com/Sanjanaprabha/Drumset",
    weblink: "https://virtualdrumkit1.netlify.app/"
  },
  {
    project: Img6,
  
  }
  
]

const Project = () => {
  useEffect(()=>{
    AOS.init({
      duration:800,
     
    })
   })
  return (
    <section id="project">
      <h5>My Recent works</h5>
      <h2>Projects</h2>

      <Swiper className="container portfolio__container" data-aos="fade-left"
                       // install Swiper modules
                       modules={[Navigation, Pagination, Autoplay]}
                       spaceBetween={30}
                       slidesPerView={1}
                       navigation
                       autoplay={{delay:5000}}
                       pagination={{ clickable: true }}
                       onSwiper={(swiper) => console.log(swiper)}
                       onSlideChange={() => console.log('slide change')}>
        {
          data.map(({project,name,disc,gitLink,weblink},index)=>{
            return(
              <SwiperSlide key={index} className="portfolio__item"
  
      >
              <div className="portfolio_item-image">
                  <img src={project} alt="" srcset="" id='pro'/>
              </div>
              <h3>{name}</h3>
              <p>{disc}</p>
              <div className="portfolio__item-cta">
              <a href={gitLink} className="btn" target="_blank">Github</a>
              <a href={weblink} className="btn btn-primary" target="_blank">Demo</a>
              
              </div>
              <small>Slide{'>>>'}</small>
            </SwiperSlide>
            )
          })      
}
      </Swiper>
      
    </section>
  )
}

export default Project