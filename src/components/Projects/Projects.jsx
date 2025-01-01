import React from "react";
import "./Projects.css";
import FanzyCake from "../../img/FanzyCakes.png";
import CropMate from "../../img/Cropmate.png";
import PCHub from "../../img/PChub.png";
import Portfolio from "../../img/Portfolio.png";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "Cake Shop Website",
      imgSrc: FanzyCake,
      description:
        "A visually appealing a responsive Website showcasing shop details and a catalog of cakes for browsing",
      techStack: "HTML, CSS, JavaScript",
    },
    {
      title: "Agriculture Mobile App",
      imgSrc: CropMate,
      description:
        "A comprehensive app designed to assist farmers with market place, weather insights, news and recommendation ",
      techStack: "Android Studio, Java, Firebase",
    },
    {
      title: "Ecommerce Website",
      imgSrc: PCHub,
      description:
        " A robust online store offering a seamless shopping experience for purchasing electronic products.",
      techStack: "PHP, CSS, JavaScript",
    },
    {
      title: "Personal Portfolio",
      imgSrc: Portfolio,
      description:
        "A sleek and professional website highlighting my skills, projects, achievements, and contact information.",
      techStack: "React, HTML, CSS",
    },
  ];

  return (
    <div className="project-section" id="projects">
      <div className="projects-header">
      <h1 className="project-heading">
        <span className="my-color">My</span> <span className="projects-color">Projects</span>
      </h1>
      </div>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h5 className="project-title">{project.title}</h5>
            <div className="project-card-view">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="card-img-top"
              />
              <div className="project-overlay">
                <p className="project-desc">{project.description}</p>
                <p className="project-lang">{project.techStack}</p>
              </div>
            </div>
            <div className="project-showcase-btn">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="Code"
              >
                <FaCode className="icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;




/*import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="projects">
      {/* heading }
      <span style={{color: darkMode?'white': ''}}>My Recent </span>
      <span>Projects</span>

      {/* slider }
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="projects-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;*/
