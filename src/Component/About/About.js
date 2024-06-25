import React from "react";
import "./About.css";
import CompanyNameLogo from "../../Assests/CompanyNameLogo.png";

const About = () => {
  return (
    <div className="container mt-3 parentAbout">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <img
            src={CompanyNameLogo}
            alt="Company logo"
            className="image_About"
            data-aos="fade-right"
          />
        </div>
        <div className="col-12 offset-md-1 offset-lg-1 col-md-5 col-lg-5 aboutDescriptionDiv">
          <p className="about_title">About</p>
          <div className="FirstParaDiv">
            <p className="FirstPara">
              Welcome to Jaipur Accounting Services Pvt Ltd! We provide
              customized accounting and taxation solutions for individuals,
              small businesses, and corporations. With our team of skilled
              professionals, including a Chartered Accountant, you can trust us
              to handle your finances accurately and in compliance with
              regulations. Let us help you achieve success with personalized
              service tailored to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
