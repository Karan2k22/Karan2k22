import React from "react";
import "./Home.css";
import homeanimi from "../../Assets/homeanimi.gif";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
    <div className="home_head">
      <div className="header-text">
        <h2 style={{ color: "white", fontWeight: "800px" }}>Welcome to my! </h2>
        <p>
          {" "}
          Hello there, I am Karan Kumar Rajak. I love experimenting with the web
        </p>
      </div>
      <div className="home-btn">
        <Link to="/about?me" className="home-nav nav1">
          <p>Know more about me</p>
        </Link>
        <Link to="/Contact" className="home-nav nav1">
          <p>My Projects</p>
        </Link>
      </div>
      <div className="splash-image">
        <img className="home_img" src={homeanimi} alt="Home" />
      </div>
    </div>
     {/* <Footer/> */}
     </>
  );
};

export default Home;
