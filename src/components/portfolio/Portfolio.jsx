import React from 'react'
import image1 from '../../assets/portfolio1.jpg'
import './portfolio.css'
import p1 from '../../assets/p1.PNG'
import p2 from '../../assets/p2.PNG'
import p3 from '../../assets/p3.PNG'
import p4 from '../../assets/p4.PNG'

const Portfolio = () => {
  const projectList = [
    {
      imagelink: p1, 
      title: 'Stock Analysis App',
      link: 'https://github.com/faizi2500/finance-app',
    },
    {
      imagelink: p2, 
      title: 'ToDo App',
      link: 'https://github.com/faizi2500/To-Do-List-New',
    },
    {
      imagelink: p3, 
      title: 'Leaderboard',
      link: 'https://github.com/faizi2500/Leaderboard',
    },
    {
      imagelink: p4, 
      title: 'Meals App',
      link: 'https://github.com/faizi2500/Meals-App',
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div id="" className="portfolio-container">
        {projectList.map((each) => {
          return(
            <article className="each-project">
              <div className="project-image-container">
                <img src={each.imagelink} alt="project 1 display" className='project-image'  />
              </div>
              <div className='project-btns'>
                <p className='project-name'>{each.title}</p>
                <a href={each.link} target="_blank" id="github-btn" className='btn btn-primary'>Github</a>
                {/* <a href="" className='btn btn-primary'>Live Demo</a> */}
              </div>
            </article>
          )  
        })}
      </div>
    </section>
  )
}

export default Portfolio