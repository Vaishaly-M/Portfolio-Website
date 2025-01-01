import React, { useContext } from "react";
import "./Intro.css";
import Profile from "../../img/Pic4.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.jpg";
import LinkedIn from "../../img/linkedin.jpg";
import Medium from "../../img/medium.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Vaishaly Mahendrarajah</span>
          <span> <br />
          A passionate and dedicated full-stack software developer with hands-on experience <br />
          in web and mobile application development. Skilled in front-end and back-end 
          technologies,with additional expertise in UI/UX design, QA, business analysis, 
          and project management. Thrives in dynamic environments, enjoys collaborative 
          teamwork, and consistently delivers user-focused, high-quality solutions.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Medium} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Profile} alt="" />
        {/* animation 
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        */}

        {/* animation */}
        <motion.div
          initial={{ left: "6rem", top: "20rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Software Developer"/>
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#f5d3e3",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-10rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
