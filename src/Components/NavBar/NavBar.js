import {useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";


const NavBar = () => {
  
  return (
    <nav className='navbar'>
      <div className='brand-title'>Brand Name</div>
      <a onClick={() => {
        alert("Hello")
      }}  href='#' className='toggle'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
    
        <div className='navbar-link'>
        {/* {!active ? toggle :""} */}
          <ul className='nav_item_list'>
            <li className='nav_item'><Link className='nav_item_a h1' href='#'>Home</Link></li>
            <li className='nav_item'><Link className='nav_item_a h1' href='#'>About</Link></li>
            <li className='nav_item'><Link className='nav_item_a h1' href='#'>Projects</Link></li>
            <li className='nav_item'><Link className='nav_item_a h1' href='#'>Contact</Link></li>
            <li className='nav_item'><Link className='nav_item_a h1' href='#'>Contact</Link></li>
        
         </ul>
            
        
      </div>
     
    </nav>
  )
}

export default NavBar