import React from "react";
import "./possibility.css";
import possibilityimage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibilityimage} alt="possibility" />
      </div>
      <div className="possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
