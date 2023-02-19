import React from 'react';
import html from "../../Assets/Skills/html.png";
import css from "../../Assets/Skills/css.png";
import js from "../../Assets/Skills/js.png";
import react from "../../Assets/Skills/react.png";
import redux from "../../Assets/Skills/redux.png";
import git from "../../Assets/Skills/git.png";

const My_Skill = () => {
  return (
    <>
    <div>
    <h2>My Skills...</h2>
        <p>Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!</p>

<img src={html} alt="html"/>
<img src={css} alt="CSS"/>
<img src={js}  alt="Java Script"/>
<img src={react} alt="React Js"/>
<img src={redux} alt="Redux"/>
<img src={git}/>
       
        
    </div>
    </>
  )
}

export default My_Skill