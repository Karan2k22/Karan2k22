import React from 'react';
import { useRef } from 'react';
import './Nav1.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {ImCross} from "react-icons/im"

const NAv1 = () => {
    const navref= useRef();
const showNavBar = () => {
    navref.current.classList.toggle("responsive_nav")
}


  return (
  <header>
    <h3>Portfolio</h3>
    <nav ref={navref}>
        <a href='/Home'>Home</a>
        <a href='/About'>About</a>
        <a href='/Skill'>Skills</a>
        <a href='/Project'>Project</a>
        <a href='/Contact'>Conatct</a>
        
        <button className='nav-close' onClick={showNavBar}><ImCross/></button>
    </nav>

    <button className='nav-btn' onClick={showNavBar}><AiOutlineMenu/></button>

  </header>
  )
}

export default NAv1