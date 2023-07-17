import React from "react";
import sample from "../../img/hero.mp4";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="slider">
      <div className="video">
        <video className="videoTag" autoPlay loop muted>
          
          <source src={sample} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Slider;
