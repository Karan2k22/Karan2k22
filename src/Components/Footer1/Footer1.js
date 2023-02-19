import React from 'react';
import "./Footer1.css";
import {AiOutlineGithub} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container1'>
                <h3 className='sub_head'>QUICK LINKS:</h3>
             <h4 className='link_item'>Home</h4>
             <h4 className='link_item'>About</h4>
             <h4 className='link_item'>Contact</h4>
             <h4 className='link_item'>Projects</h4>
            </div>

            <div className='container2'>
                <h3 className='sub_head1'>FOLLOW ME:</h3>
                <div>
                <a className='icon' href='https://github.com/Karan2k22'><AiOutlineGithub/></a>
                <a className='icon' href='https://www.linkedin.com/in/karan-kumar-b74906240/'><BsLinkedin/></a>
                {/* <a className='icon' href='/'><BsInstagram/></a>
                <a className='icon' href='/'><FaFacebookF/></a> */}
                <a className='icon' href='https://web.whatsapp.com/'><BsWhatsapp/></a>
                </div>
            </div>
        </div>
        <div className='footer-leg'>@Design & Devlop By Karan Kumar Rajak</div>

    </>
  )
}

export default Footer