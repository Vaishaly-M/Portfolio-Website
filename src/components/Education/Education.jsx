import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Education.css";
import SUSL from "../../img/SUSL.png";  
import UGC from "../../img/UGC.png"; 

const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="education" id="education">
      <div className="heading-container">
        <div className="heading">
          <span>Current <br /></span>
          <span style={{ color: "var(--maroon)" }}> Education </span>
          <span>Status</span>
        </div>
      </div>
      <div className="education-content">
        <div className="box">
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "var(--maroon)" : "" }}>
            {/* Display the SUSL logo inside the circle */}
            <img src={SUSL} alt="SUSL Logo" className="logo" />
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>BSc Hons in Computing and Information System</span>
          <span>CGPA is 3.575</span>
        </div>
        </div>
        <div className="box">
        <div className="achievement">
          <div className="circle" style={{ color: darkMode ? "var(--maroon)" : "" }}>
            {/* Display the UGC logo inside the circle */}
            <img src={UGC} alt="UGC Logo" className="logo" />
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>GCE A/L in Physical Science Stream</span>
          <span>Got A2C in English Medium</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
