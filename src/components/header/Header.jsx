import React from 'react'
import './header.css'
import { CTA } from './CTA'
import ME from '../../assets/sukuna4.png'
import Socials from '../header/Socials'
import spinner from './spinner'

const Header = () => {
  return (
   <header>
    {spinner}
    <div className="container header__conatiner">
      <h5>Hello I'm </h5>
      <h1>Ronit Bali</h1>
      <h5 className='text-light'>Frontend Developer</h5>
      <CTA />
      <Socials />
      <div className="me">
        <img src={ME} alt="" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>

   </header>
  )
}

export default Header