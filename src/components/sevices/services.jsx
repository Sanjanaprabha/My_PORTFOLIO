import React from 'react'
import "./services.css";
import {BiStar} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h2>Hobbies and Certifications</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
          <h3>Courses Certifications </h3>
          </div>

          <ul className="service__list">
            <li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <a href="#" className='btn btn-primary'>View Certificates</a>
            </li>
          </ul>
</article>
{/* --------extracuricular hobbies--------------------------- */}

<article className='service'>
          <div className="service__head">
          <h3>My Hobbies & Certificates </h3>
          </div>

          <ul className="service__list">
            <li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li><li>
            <BiStar className="service__list-icon"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li> 
              <a href="#" className='btn btn-primary'>View Certificates</a>
            </li>
          </ul>
</article>

      </div>
    </section>
  )
}

export default services 