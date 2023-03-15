import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from "./Pages/About/About.js";
import Skills from "./Pages/Skill/Skills.js";
import Contact from "./Pages/Contact/Contact.js";
import NAv1 from './Components/n1/NAv1.js';
import Footer1 from "./Components/Footer1/Footer1.js";
import Project from './Pages/Projects/Project';
const App = () => {
  return (
    <>
     <Router>
       <NAv1/>
       <Routes >
         <Route exact  path='*' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Skill' element={<Skills/>}/>
         <Route path='/Project' element={<Project/>}/>
         <Route path='/Contact' element={<Contact/>}/>
      
       </Routes>
    <Footer1/>
    </Router>
    
     </>
   
   )
 }

export default App



