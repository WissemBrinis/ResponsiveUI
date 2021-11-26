import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Feature N1",
    text: "this is feature number one and that what it is",
  },
  {
    title: "Feature N2",
    text: "this is feature number two and that what it is",
  },
  {
    title: "Feature N3",
    text: "this is feature number three and that what it is",
  },
  {
    title: "Feature N4",
    text: "this is feature number four and that what it is",
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          The Future is now you just need to realize it.
        </h1>
        <p>Request Early Access</p>
      </div>
      <div className="features-container">
        {featuresData.map((item, index) => {
          return (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
