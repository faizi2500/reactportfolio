import React from 'react'
import CV from '../../assets/cv.pdf'

const Cta = () => {
  return (
    <div>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default Cta