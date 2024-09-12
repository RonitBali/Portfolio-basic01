import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuBook } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActivenav] = useState('#');
  return (
    <nav>
     <a href="#"  onClick={() => setActivenav('#')} className={activeNav === '#' ? 'active' :''}><IoHomeOutline /></a>
     <a href="#about" onClick={() => setActivenav('#about')} className={activeNav === '#about' ? 'active' :''}><FaRegUser /> </a>
     <a href="#experience" onClick={() => setActivenav('experience')} className={activeNav === '#experience' ? 'active' :''}><LuBook/></a>
     <a href="#services" onClick={() => setActivenav('#services')} className={activeNav === '#services' ? 'active' :''}><RiCustomerService2Line /></a>
     <a href="#contact" onClick={() => setActivenav('#contact')} className={activeNav === '#contact' ? 'active' :''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav