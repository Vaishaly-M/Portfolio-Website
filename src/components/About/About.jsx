import React, { useContext } from "react";
import "./About.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="about" id="about">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span>My Self</span>
        <spane>
        I am Vaishaly Mahendrarajah, a 3rd-year undergraduate at Sabaragamuwa University  <br />
        of Sri Lanka, pursuing a BSc (Hons) in Computing and Information Systems. As a <br />
        passionate and dedicated full-stack software developer, I specialize in building dynamic  <br />
        and responsive web andmobile applications. My expertise spans both front-end and <br />
        back-end development, ensuring seamless, user-friendly experiences. <br /> <br />
        
        In addition to full-stack development, I have strong skills in UI/UX design, quality <br />
        assurance, business analysis, and project management. I enjoy working collaboratively <br />
        in teams and excel at managing individual projects, always driven by a commitment  <br />
        to deliver high-quality solutions.<br />
          
        </spane>
        <a href={Resume} download>
          <button className="button a-button">Download CV</button>
        </a>
        <div className="blur a-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "11rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"UI/UX Desigener"}
            detail={"Figma, Sketch, Photoshop, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-4rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Full-Stack Developer"}
            detail={"Html, Css, JavaScript, React, Java, Python"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "20rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Quality Assurance Engineer "}
            detail={ "Selenium, JUnit, PostMan"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur a-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
