import React from 'react'
import './about.css'
import Me from '../../assets/me-bg.jpg'
import Me1 from '../../assets/me1.png'
import { FaAward, FaBlogger } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about" className='about-section'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className="image-section">
          <img src={Me1} alt="my-about-display" className='image-me' />
        </div>

        <div className="abount-content">
          <div className="about-cards">
            <article className='article-card'>
              <FaAward className='icon-size'/>
              <h3>Experience</h3>
              <small>0-1 Year Working</small>
            </article>
            <article className='article-card'>
              <FaBlogger className='icon-size'/>
              <h3>Blogging</h3>
              <small>1+ Published</small>
            </article>
            <article className='article-card'>
              <VscFolderLibrary className='icon-size' />
              <h3>Projects</h3>
              <small>5+ Completed</small>
            </article>
          </div>
          <p className='para-section'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corrupti aperiam ut odit aut vitae officiis fuga delectus, explicabo est atque voluptatum illo blanditiis quaerat recusandae sed reiciendis sequi quidem rem earum veritatis nisi qui nesciunt! Quisquam dignissimos ex fuga possimus expedita totam officiis iusto ratione architecto quam magni nostrum perspiciatis obcaecati unde, minima esse provident</p>
          <a href="#" id="btn-about-section" className='btn btn-primary about-btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About