import React, { useContext } from "react";
import "./Skills.css";
import HTML from "../../img/html.jpeg";
import CSS from "../../img/CSS.jpeg";
import ReactJS from "../../img/React.png";
import Java from "../../img/Java.png";
import mysql from "../../img/mysql.png";
import python from "../../img/python.jpeg";
import MongoDB from "../../img/MongoDB.png";
import NodeJS from "../../img/node js.jpeg";
import JavaScript from "../../img/JS.png";
import Angular from "../../img/Angular.jpeg";
import Figma from "../../img/figma.png";
import php from "../../img/php.png";
import Firebase from "../../img/firebase.png";
import Bootstrap from "../../img/Bootstrap.jpeg";
import SpringBoot from "../../img/Spring boot.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="skills" id="skills">
      {/* left side */}
      <div className="s-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Familiar 
          </span>
          <span>Tools And Techniques </span>
          <span>
          I leverage a diverse set of tools and techniques to bring projects to life, 
            <br />
            ensuring efficiency, innovation, and quality. From front-end and back-end  
            <br />
            development to UI/UX design, quality assurance, and project management, I 
            <br />
            utilize industry-standard tools My technical toolkit reflects my adaptability 
            <br />
            and passion for creating seamless digital experiences.
          </span>
          <div
            className="blur a-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="s-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="s-mainCircle"
        >
          <div className="s-secCircle">
            <img src={HTML} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={Java} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={ReactJS} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={JavaScript} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={mysql} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={python} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={SpringBoot} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={CSS} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={MongoDB} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={NodeJS} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={Angular} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={Figma} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={Bootstrap} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={Firebase} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={php} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
