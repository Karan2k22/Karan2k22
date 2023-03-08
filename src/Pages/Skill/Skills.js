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
            <img className="image"  src={html} alt="html" />
            <img className="image"  src={css} alt="CSS" />
            <img className="image" src={js} alt="Java Script" />
            <img className="image" src={react} alt="React Js" />
            <img className="image" src={redux} alt="Redux" />
            <img className="image" width="120px" src={git} alt="Git" />
          </div>
        </div>
      </div>
    </>
  );
};

export default My_Skill;
