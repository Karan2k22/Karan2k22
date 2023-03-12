import React from "react";
import "./Skills.css";
import html from "../../Assets/Skills/html.png";
import css from "../../Assets/Skills/css.png";
import js from "../../Assets/Skills/js.png";
import react from "../../Assets/Skills/react.png";
import redux from "../../Assets/Skills/redux.png";
import git from "../../Assets/Skills/git.png";

const My_Skill = () => {
  return (
    <>
      <div className="card">
        <div style={{color:"white",textAlign:"center"}}>
          <h2>My Skills...</h2>
          <p>
            Passionate about new technologies, I keep exploring stuff. Here's
            the tech stack I've worked with!
          </p>
        </div>

        <div
       className="body"
        >
          <div className="body1">
            {/* section 1 */}
            <div className="section">

            <div className="section_side">
            <img className="tech_image"  src={html} alt="html"  />

            </div>
            <div className="section_side">
            <img className="tech_image"  src={css} alt="CSS" />

            </div>
            </div>

            {/* Section 2 */}
            <div className="section">
            <div className="section_side">
            <img className="tech_image" src={js} alt="Java Script" />
            </div>
            <div className="section_side">
            <img className="tech_image" src={react} alt="React Js" />
            </div>
            </div>
            
{/* //section 3 */}
            <div className="section">
            <div className="section_side">
            <img className="tech_image" src={redux} alt="Redux" />
            </div>
            <div className="section_side">
            <img className="tech_image" width="120px" src={git} alt="Git" />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default My_Skill;
