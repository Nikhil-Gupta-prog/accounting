import React, { useState } from "react";
import "./Header.css";
import BlueBGLogo from "../../Assests/BlueBGLogo.png"
import YellowBGLogo from "../../Assests/YelloBGLogo.png"

import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);

  const toggle = () => {
    setShow((prevState) => !prevState);
  };

  const changeNavBar = () => {
    if (window.scrollY >= 10) {
      setChange(true);
    } else {
      setChange(false);
    }
  }
  window.addEventListener("scroll", changeNavBar);

  return (
    <nav className={change ? "navbar navbar-b navbar-trans navbar-expand-md fixed-top active" : "navbar navbar-b navbar-trans navbar-expand-md fixed-top"}
      id="mainNav"
    >
      <div className="container-fluid ">
        <button
          onClick={toggle}
          className={
            show ? " navbar-toggler " : " navbar-toggler ms-auto collapsed"
          }
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div>
          <Link to="/" smooth={true} duration={1000}> 
         <img src={change ? BlueBGLogo : YellowBGLogo} alt="logo"  className="logoImage"/>
         </Link>
        </div>
        <div className={
            !show
              ? "navbar-collapse collapse justify-content-end"
              : " navbar-b navbar-trans tog_nav nav-link:before navbar-b navbar-reduce nav-link:before"
          }
          id="navbarDefault"
        >
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item  ">
              <Link to="/" smooth={true} duration={1000} className={change ? "nav-link2 " : "nav-link"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={change ? "nav-link2 " : "nav-link"}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/news"
                smooth={true}
                duration={1000}
                className={change ? "nav-link2 " : "nav-link"}
              >
                News
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className={change ? "nav-link2 " : "nav-link"}>
                Contact
              </Link>
            </li>
            {/* <button className="btn btn-sm n">Resume</button> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
