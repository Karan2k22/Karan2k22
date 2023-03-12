import React from "react";
import "./Project.css";
import Portfolio from "../../Assets/projectsImage/Portfolio.png";
import ContactForm from "../../Assets/projectsImage/ContactForm.png";
import Game from "../../Assets/projectsImage/Game.png";

const Project = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <h3>My Projects...</h3>
        </div>
<div style={{padding:"30px"}}>

<div className="box1">
          <div style={{ flex: "0.4" }} className="image_container">
            <img className="image" src={Portfolio} alt="html" />
            <p className="overlay">My Portfolio</p>
          </div>

          <div style={{ flex: "0.6"}} className="box1_text_side">
            <p>I make My profile to describe about my self.</p><br/>
            <a href="https://github.com/Karan2k22/My_portfolio.git">Git Hub Repositories Link</a>
          </div>
        </div>

        <div className="box1">
          <div style={{ flex: "0.4" }} className="image_container">
            <img className="image" src={ContactForm} alt="html" />
            <p className="overlay">Contact Form</p>
          </div>

          <div style={{ flex: "0.6"}} className="box1_text_side">
            <p>I make this contact form for people contact me on my email.</p><br/>
            <a href="https://github.com/Karan2k22/My_portfolio.git">Git Hub Repositories Link</a>

          </div>
        </div>

          <div className="box1">
          <div style={{ flex: "0.4" }} className="image_container">
            <img className="image" src={Game} alt="html" />
            <p className="overlay">Hit Mosquito Game</p>
          </div>

          <div style={{ flex: "0.6"}} className="box1_text_side">
           <p>I make this Game for fun.</p> <br/>
           <a href="https://karan2k22.github.io/Hit-The-Mosquito/"><p style={{textDecoration:"none",color:"white"}}>Click here to Play the game.</p></a>
            <a href="https://github.com/Karan2k22/Hit-The-Mosquito.git">Git Hub Repositories Link</a>
          </div>
        </div>

</div>
        
      </div>
    </>
  );
};

export default Project;
