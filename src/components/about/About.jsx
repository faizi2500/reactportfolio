import React from 'react'
import Me from '../../assets/me1.png'
import { FaAward, FaBlogger } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className="image-section">
          <img src={Me} alt="my-about-display" />
        </div>

        <div className="abount-content">
          <div className="about-cards">
            <article>
              <FaAward />
              <h3>Experience</h3>
              <small>1 Year Working</small>
            </article>
            <article>
              <FaBlogger />
              <h3>Blogging</h3>
              <small>1+ Published</small>
            </article>
            <article>
              <GrProjects />
              <h3>Projects</h3>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi corrupti aperiam ut odit aut vitae officiis fuga delectus, explicabo est atque voluptatum illo blanditiis quaerat recusandae sed reiciendis sequi quidem rem earum veritatis nisi qui nesciunt! Quisquam dignissimos ex fuga possimus expedita totam officiis iusto ratione architecto quam magni nostrum perspiciatis obcaecati unde, minima esse provident quod illum? Optio explicabo quam dolores sequi laborum tenetur dolorem quia nam atque quo expedita molestias laudantium, enim dicta.</p>
          <a href="#">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About