import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
// import Footer from './Components/Footer/Footer';
// // import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About.js";
import Skills from "./Pages/Skill/Skills.js";
import Contact from "./Pages/Contact/Contact.js";
// import Navbar from "../src/Components/NAV/Navbar.js";
// import Nav_bar from './Components/NAV/Nav_bar.js';
import NAv1 from './Components/n1/NAv1.js';
import Footer1 from "./Components/Footer1/Footer1.js";
import Project from './Pages/Projects/Project';
// import Code from './Pages/Exp/Code';
const App = () => {
  return (
    <>
     <Router>
       {/* <NavBar/> */}
       {/* <Navbar/> */}
       <NAv1/>
       
       <Routes>
        
         {/* <Route path='/' element={<NAv1/>}/> */}
         {/* <Route path='//' element={<Code/>}/> */}
         <Route path='/Home' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Skill' element={<Skills/>}/>
         <Route path='/Project' element={<Project/>}/>
         <Route path='/Contact' element={<Contact/>}/>
      
       </Routes>
       {/* <Footer/> */}
    <Footer1/>
      
    </Router>
    
     </>
   
   )
 }

export default App



