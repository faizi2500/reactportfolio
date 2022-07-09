import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import  { SiHashnode } from 'react-icons/si';


const Social = () => {
  return (
    <div className="header-socials">
      <a href="www.linkedin.com/in/faizan2500" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/faizi2500" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
      <a href="https://twitter.com/codewithfaizi" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
      <a href="https://codewithfaizi.hashnode.dev/" target="_blank" rel="noopener noreferrer"><SiHashnode/></a>
      <hr/>
    </div>
  )
}

export default Social