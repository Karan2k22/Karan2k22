import React from 'react';
import { useRef } from 'react';
import './Nav1.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {ImCross} from "react-icons/im"
import { Link } from 'react-router-dom';

const NAv1 = () => {
    const navref= useRef();
const showNavBar = () => {
    navref.current.classList.toggle("responsive_nav")
}


  return (
  <header>
    <h3>Portfolio</h3>
    <nav ref={navref}>
        <Link to="/">Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Skill'>Skills</Link>
        <Link to='/Project'>Project</Link>
        <Link to='/Contact'>Conatct</Link>
        
        <button className='nav-close' onClick={showNavBar}><ImCross/></button>
    </nav>

    <button className='nav-btn' onClick={showNavBar}><AiOutlineMenu/></button>

  </header>
  )
}

export default NAv1