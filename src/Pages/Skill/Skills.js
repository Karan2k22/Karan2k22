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
          style={{
            justifyContent: "center",
            alignItem: "center",
            textAlign:"center"
            // display: "flex",
          }}
        >
          <div style={{ margin: "20px" }}>
            <img style={{margin:"10px 20px 10px 20px"}} src={html} alt="html" />
            <img style={{margin:"10px 20px 10px 20px"}} src={css} alt="CSS" />
            <img style={{margin:"10px 20px 10px 20px"}} src={js} alt="Java Script" />
          {/* </div> */}
          {/* <div style={{ margin: "20px", padding: "33px" }}> */}
            <img style={{margin:"10px 20px 10px 20px"}} src={react} alt="React Js" />
            <img style={{margin:"10px 20px 10px 20px"}} src={redux} alt="Redux" />
            <img style={{margin:"10px 20px 10px 20px"}} width="120px" src={git} alt="Git" />
          </div>
        </div>
      </div>
    </>
  );
};

export default My_Skill;
