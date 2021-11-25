import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header-content">
        <h1 className="gradient__text">
          Responsive design by Wissem Ben Brinis
        </h1>
        <p>Im just building this Responsive Design to get better and better </p>
        <div className="header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header-content__people">
          <img src={people} alt="" />
          <p>1600 people requested acces visit in the last 24hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt=" " />
      </div>
    </div>
  );
};

export default Header;
