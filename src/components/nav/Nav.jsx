import React from 'react';
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActive] = useState('home');
  
  const clickHandler = (event) => {
    setActive(event.currentTarget.id)
  }
  console.log(activeNav);

  return (
    <nav id="nav-id" className="nav-bar">
      <a href="#" id="home-sec" className={activeNav === 'home-sec' ? 'active' : ''} onClick={clickHandler}><AiOutlineHome className='icon-style'/></a>
      <a href="#about" id="about-sec" className={activeNav === 'about-sec' ? 'active' : ''} onClick={clickHandler}><AiOutlineUser className='icon-style' /></a>
      <a href="#experience" id="experience-sec" className={activeNav === 'experience-sec' ? 'active' : ''} onClick={clickHandler}><BiBook className='icon-style'/></a>
      <a href="#portfolio" id="portfolio-sec" className={activeNav === 'portfolio-sec' ? 'active' : ''} onClick={clickHandler}><RiServiceLine className='icon-style'/></a>
      <a href="#contact" id="contact-sec" className={activeNav === 'contact-sec' ? 'active' : ''} onClick={clickHandler}><BiMessageSquareDetail className='icon-style'/></a>
    </nav>
  )
}

export default Nav

// <nav className='navigation-bar'>
    //   <ul id="nav-id" className='nav-bar'>
    //     <li id="a1 list" className="active" onClick={clickHandler}><a href="#"><AiOutlineHome/></a></li>
    //     <li id="a2 list" onClick={clickHandler}><a className="socials" href="#"><CgProfile/></a></li>
    //     <li id="a3 list" onClick={clickHandler}><a className="socials" href="#"><FaBloggerB/></a></li>
    //     <li id="a4 list" onClick={clickHandler}><a className="socials" href="#"><GrProjects/></a></li>
    //     <li id="a5 list" onClick={clickHandler}><a className="socials" href="#"><GrContact/></a></li>
    //   </ul>
    // </nav>