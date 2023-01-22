import React from 'react'
import "./contact.css";
import {FiMail} from 'react-icons/fi'
import {IoLogoWhatsapp} from 'react-icons/io'
import {useRef} from'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wwagfua', 'template_6agczak', form.current, 'vzaJpu1v7Pc3iHbxo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <FiMail className='contact__option-icon'/>
          <h4>Emails</h4>
          <h6>prabhasanjana126@gmail.com</h6>
          <a href="mailto:prabhasanjana126@gmail.com" target="_blank">send a mail</a>
          </article>
          <article className="contact__option">
          <IoLogoWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 6377466832</h5>
          <a href="https://wa.me/916377466832" target= "_blank">Message me</a>
          </article>
        </div>
        {/* ------------form------------ */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Full email' required />
          <textarea name="message" cols="30" rows="10" placeholder='Your Message' requiredn></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact 