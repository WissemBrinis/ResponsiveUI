import React from "react";
import { Feature } from "../../components";
import "./middle.css";

const Middle = () => {
  return (
    <div className="middle section__margin" id="about">
      <div className="middle-feature">
        <Feature
          title="Feature N1"
          text="this is the main feature of our app and this what we are about and it will always be the number one priority"
        />
      </div>
      <div className="middle-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="middle-container">
        <Feature
          title="Feature N2"
          text="this is the number 2 feature of our app and this what we are about and it will always be the number two priority"
        />
        <Feature
          title="Feature N3"
          text="this is the number 3 feature of our app and this what we are about and it will always be the number three priority"
        />
        <Feature
          title="Feature N4"
          text="this is the number 4 feature of our app and this what we are about and it will always be the number four priority"
        />
      </div>
    </div>
  );
};

export default Middle;
