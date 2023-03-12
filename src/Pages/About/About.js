import React from "react";
import profile from "../../Assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-head">
        
          <img src={profile} alt="animation" className="about_imge " />


        <div style={{marginBottom:"20px"}} >
          <div className="about-card">
            <h3> Devlopement</h3>
            <p>
             Ambitious React Frontend Developer enthusiastic to learn and explore new technologies.One Year of Practial experiance in coding, and building numerous websites and applications.
             Strongly intersted in obtaining a backend Developer position to create impactful and scalable products. 
            </p>
          </div>

          <div className="about-card">
            <h3>Teacher</h3>
            <p>
              Teaching is my passion, till now, I've taught many of students
              about  Basic Computer, Programming.
            </p>
          </div>

          {/* <div className="about-card">
            <h4> Art lover</h4>
            <p>
              I'm obsessed with making things and even more obsessed with making
              things better. I've been in the business of creating since i hung
              my first painting on the wall when i was 7.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
