import React from "react";
import "./Footer.css";
import { BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";


const Footer = () => {
  return (
    <>
      <div className="footer">

<div>
  <div style={{    color:" #51e8ef",
    fontSize: "25px",
    fontWeight: "500"}}>QUICK LINKS:</div>
  <div>
    <a>Home</a>
    <a>Contact</a>
    <a>About</a>
    <a>Projects</a>
  </div>
</div>

        <div className="social_head">
          <div className="social_sub_head">
            FOLLOW ME :
          </div>

          <div className="social-link">
            <a className="social_icon item" href="https://github.com/Karan2k22">
              <BsGithub />
            </a>

            <a
              className="social_icon item"
              href="https://www.linkedin.com/in/karan-kumar-b74906240/"
            >
              <GrLinkedin />
            </a>

            <a
              className="social_icon item"
              href="https://instagram.com/kishan_kr_007?igshid=YmMyMTA2M2Y="
            >
              <BsInstagram />
            </a>

            <a
              className="social_icon item"
              href="https://www.facebook.com/profile.php?id=100022816563045"
            >
              <BsFacebook />
            </a>
          </div>
        </div>

        <div className="header-leg">
          <div style={{ letterSpacing: " .2rem" }}>
            Privacy {"   |   "} Policy
          </div>
          <p> @Design & Dealop by Karan</p>
        </div>



      </div>
    </>
  );
};

export default Footer;
