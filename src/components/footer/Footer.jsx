import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import  { SiHashnode } from 'react-icons/si';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
      <h2 className='footer-heading'>Faizan Zahid</h2>
      <div className='social-links-footer'>
        <a href="www.linkedin.com/in/faizan2500" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/faizi2500" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/codewithfaizi" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
        <a href="https://codewithfaizi.hashnode.dev/" target="_blank" rel="noopener noreferrer"><SiHashnode/></a>
      </div>
      <div className='copy-rights'>
        <small>&copy; Faizan Zahid: All rights reserved</small>
      </div>
    </div>
  )
}

export default Footer