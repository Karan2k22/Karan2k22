import React from 'react';
import "./Footer1.css";
import {AiOutlineGithub} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container1'>
                <h3 className='sub_head'>QUICK LINKS:</h3>
             <h4 className='link_item'>
              <Link to='/' style={{textDecoration:"none",color:"white"}}>Home</Link>
              </h4>
             <h4 className='link_item'>
             <Link to='/About' style={{textDecoration:"none",color:"white"}}>About</Link>              
             </h4>
             <h4 className='link_item'>
             <Link to='/Contact' style={{textDecoration:"none",color:"white"}}>Contact</Link>
</h4>
             <h4 className='link_item'>
             <Link to='/Project' style={{textDecoration:"none",color:"white"}}>Projects</Link>

              </h4>
            </div>

            <div className='container2'>
                <h3 className='sub_head1'>FOLLOW ME:</h3>
                <div>
                <a className='icon' href='https://github.com/Karan2k22'  target="_blank"><AiOutlineGithub/></a>
                <a className='icon' href='https://www.linkedin.com/in/karan-kumar-b74906240/'  target="_blank"><BsLinkedin/></a>
                {/* <a className='icon' href='/'><BsInstagram/></a>
                <a className='icon' href='/'><FaFacebookF/></a> */}
                <a className='icon' href='https://web.whatsapp.com/'  target="_blank"><BsWhatsapp/></a>
                </div>
            </div>
        </div>
        <div className='footer-leg'>@Design & Devlop By Karan Kumar Rajak</div>

    </>
  )
}

export default Footer