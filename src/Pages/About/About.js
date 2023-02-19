import React from "react";
import profile from "../../Assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-head">
        <div>
          <img src={profile} alt="animation" className="about_imge" />
        </div>

        <div className="about-card-head">
          <div className="about-card">
            <h4> Data Analyst</h4>
            <p>
              Data Analyst with more then 2 years of experience in the field of
              Medical sciences and Medicine
            </p>
          </div>

          <div className="about-card">
            <h4>Teacher</h4>
            <p>
              Teaching is my passion, till now, I've taught many of students
              about Biology, History and Biotechnology.
            </p>
          </div>

          <div className="about-card">
            <h4> Art lover</h4>
            <p>
              I'm obsessed with making things and even more obsessed with making
              things better. I've been in the business of creating since i hung
              my first painting on the wall when i was 7.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
