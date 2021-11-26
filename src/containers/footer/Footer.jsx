import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="footer-btn">
        <p>Request early access</p>
      </div>
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
          <p>WorldWide im everywhere, C16 </p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Countries</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Worldwide Developer</p>
          <p>wissembenbrinis@gmail.com</p>
          <p>+216 24 527 699</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2021 designed by BRINIS- All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
