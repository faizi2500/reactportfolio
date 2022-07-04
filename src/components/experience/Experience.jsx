import React from 'react'
import { HiBadgeCheck } from 'react-icons/hi'
import './experience.css'

const Experience = () => {
  const frontendSkills = ['HTML', 'CSS', 'BootStrap', 'TailWind', 'JavaScript', 'React', 'Jest', 'React Testing Library']
  const backendSkills = ['Ruby', 'RoR', 'ExpressJS', 'PostgreSQL', 'MongoDB', 'ORMs']
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>  
      <h2>My Experience</h2>

      <div className='experiece-article-section'>
        <article className='each-section-article'>
          <h3 className='heading-frontend'>Frontend Development</h3>
          <div className='frontend-skill-section'>
            {frontendSkills.map((skill) => {
              return (
                <div className='each-skill'>
                  <HiBadgeCheck />
                  <h3>{skill}</h3>
                </div>
              )
            })}
          </div>
        </article>
        <aritcle className="each-section-article backend-skill-article">
          <h3 className='heading-frontend'>Backend Development</h3>
          <div className='frontend-skill-section'>
            {backendSkills.map((skill) => {
              return (
                <div className='each-skill'>
                  <HiBadgeCheck />
                  <h3>{skill}</h3>
                </div>
              )
            })}
          </div>
        </aritcle>
      </div>
    </section>
  )
}

export default Experience