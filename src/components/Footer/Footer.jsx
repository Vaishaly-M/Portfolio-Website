import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.jpg";
import LinkedIn from "../../img/linkedin1.jpg";
import Github from "../../img/github2.jpg";
import Medium from "../../img/medium1.jpg";
import Mail from "../../img/email.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>©2024 Vaishaly All rights reserved</span>
        <div className="f-icons">

          <a href="https://github.com/Vaishaly-M" target="_blank" rel="noopener noreferrer">
             <img src={Github} alt="" />
             </a>   
          <a href="https://linkedin.com/in/vaishaly-mahedrarajah" target="_blank" rel="noopener noreferrer">
             <img src={LinkedIn} alt="" />
             </a> 
             <a href="mailto:vaishalymahendrarajah@example.com" target="_blank" rel="noopener noreferrer">
             <img src={Mail} alt="" />
             </a> 
             <a href="https://medium.com/@vasukivaishaly1" target="_blank" rel="noopener noreferrer">
             <img src={Medium} alt="" />
             </a>  
        </div>
      </div>
    </div>
  );
};

export default Footer;
