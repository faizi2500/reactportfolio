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
          <p className='para-section'>I'm a hands-on, agile, and empathetic developer who loves building effective products. I have experience working in teams to build applications using modern technologies. <br/> <br/> I'm a full stack developer with a passion towards front-end development. I have a background in SaaS and digital marketing. I am here to make the world a better place with good code.</p>
          <a href="#" id="btn-about-section" className='btn btn-primary about-btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About