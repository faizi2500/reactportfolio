import React from 'react'
import './header.css'
import Cta from './Cta'
import Me from '../../assets/me1.png'
import Social from './Social'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I am</h5>
        <h1>Faizan Zahid</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <Cta />
        <Social />
        <div className="image-container">
          <img className="fitting-image" src={Me} alt="me"/>
        </div>

        <a href="#contact" className="scroll-down">SCROLL DOWN</a>

      </div>
    </header>
  )
}

export default Header