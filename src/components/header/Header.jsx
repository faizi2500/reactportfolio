import React from 'react'
import Cta from './Cta'
import Me from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container">
        <h5>Hello, I am</h5>
        <h1>Faizan Zahid</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <Cta />
        <div className="">
          <img src={Me} alt="my-picture"/>
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header