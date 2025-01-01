import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.jpg";
import LinkedIn from "../../img/linkedin1.jpg";
import Github from "../../img/github2.jpg";
import Medium from "../../img/medium1.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>©2024 Vaishaly All rights reserved</span>
        <div className="f-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Medium} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
