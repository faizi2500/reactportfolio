import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Contact</h5>
      <h2>Contact Me</h2>
      <div className='contact-container'>
        <div className='contact-options'>
          <article className='article-card'>
            <HiOutlineMail className='icon-size'/>
            <h3>Email</h3>
            <a href="mailto:faizan.2500z@gmail.com?">Send a nessage</a>
          </article>
          <article className='article-card'>
            <IoLogoWhatsapp className='icon-size'/>
            <h3>Whatsapp</h3>
            <a
              href="https://wa.me/+923214209190"
              class="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >Let's Chat</a>
          </article>
        </div>
        <div>
          <form action="https://getform.io/f/25c11066-ebe3-4563-b47e-b1c930e754a0" method="POST" id="usrform">
            <input type="text" name="name" placeholder='Your Name' required className='input-fields input-area'/>
            <input type="email" name="email" placeholder='Your Email' required className='input-fields input-area'/>
            <textarea name="comment"rows="7" placeholder='Your Message' required className='input-fields'></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>


      </div>
    </section>
  )
}

export default Contact