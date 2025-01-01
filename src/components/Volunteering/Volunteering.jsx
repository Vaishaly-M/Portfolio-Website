import React, { useState, useEffect } from "react";
import './Volunteering.css'; 
/*import CWWIE1 from "../../img/CWWIE (1).jpg";
import CWWIE2 from "../../img/CWWIE (2).jpg";
import CWWIE3 from "../../img/CWWIE (3).jpg";
import CWWIE4 from "../../img/CWWIE (4).jpg";
import CWWIE5 from "../../img/CWWIE (5).jpg";
import CWWIE6 from "../../img/CWWIE (6).jpg";
import INSL231 from "../../img/INSL23 (1).jpg";
import INSL232 from "../../img/INSL23 (2).jpg";
import INSL233 from "../../img/INSL23 (3).jpg";
import INSL234 from "../../img/INSL23 (4).jpg";*/
import INSL1 from "../../img/INSL (1).jpg";
import INSL2 from "../../img/INSL (2).jpg";
import INSL3 from "../../img/INSL (3).jpg";
import INSL4 from "../../img/INSL (4).jpg";
import INSL5 from "../../img/INSL (5).jpg";
import INSL6 from "../../img/INSL (6).jpg";
import INSL7 from "../../img/INSL (7).jpg";
import INSL8 from "../../img/INSL (8).jpg";
import IEEEDay1 from "../../img/IEEE DAY  (1).jpg";
import IEEEDay3 from "../../img/IEEE DAY  (3).jpg";
import IEEEDay4 from "../../img/IEEE DAY (4).jpg";
import PearlHack1 from "../../img/Pearlhack1 (1).jpg";
import PearlHack2 from "../../img/Pearlhack1 (2).jpg";
import PearlHack3 from "../../img/Pearlhack1 (3).jpg";
import PearlHack4 from "../../img/Pearlhack1 (4).jpg";
import PearlHack5  from "../../img/Pearlhack1 (5).jpg";
import PearlHack6 from "../../img/Pearlhack1 (6).jpg";
import PearlHack7 from "../../img/Pearlhack1 (7).jpg";
import PearlHack8 from "../../img/Pearlhack1 (8).jpg";
import PearlHack9 from "../../img/Pearlhack1 (9).jpg";
import PearlHack10 from "../../img/Pearlhack1 (10).jpg";
import VolunteerOfMonth from "../../img/VolMonth.png";


const Volunteering = () => {
    const [currentSlideINSL, setCurrentSlideINSL] = useState(0);
    const [currentSlideIEEEDay, setCurrentSlideIEEEDay] = useState(0);
    const [currentSlidePearlHack, setCurrentSlidePearlHack] = useState(0);
  
    // Set auto-slide interval time (in milliseconds)
    const slideInterval = 2000; // 3 seconds, adjust this value as needed
  
    // Function to handle slide navigation
    const goToNextSlide = (setCurrentSlide, totalSlides) => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
  
    const goToPrevSlide = (setCurrentSlide, totalSlides) => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
  
    // Auto-slide functionality
    useEffect(() => {
      const interval = setInterval(() => {
        goToNextSlide(setCurrentSlideINSL, 8);
        goToNextSlide(setCurrentSlideIEEEDay, 3);
        goToNextSlide(setCurrentSlidePearlHack, 10);
      }, slideInterval);
  
      return () => clearInterval(interval); // Clean up on component unmount
    }, [slideInterval]);
  
    return (
      <section id="Volunteering">
        <div className="section-title padd-15">
        <span>My </span>
        <span style={{color: "var(--maroon)"}}> Volunteering </span> <br />
        <span>Gallery</span>
        </div>
  
        <div className="volunteer-experience-grid">
          {/* Box 1 */}
          <div className="experience-box">
            <div className="slideshow-container">
              {[INSL1, INSL2, INSL3, INSL4, INSL5, INSL6, INSL7, INSL8].map((image, index) => (
                <div className={`slides ${index === currentSlideINSL ? "active" : ""}`} key={index}>
                  <img src={image} style={{ width: "100%" }} alt={`INSL ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="description">
              <p><strong>INSL Provincial Competition 2024</strong></p>
              <p><b>Host of INSL Provincial Competition 2024</b></p>
            </div>
          </div>
  
          {/* Box 2 */}
          <div className="experience-box">
            <div className="slideshow-container">
              {[IEEEDay1, IEEEDay3, IEEEDay4].map((image, index) => (
                <div className={`slides ${index === currentSlideIEEEDay ? "active" : ""}`} key={index}>
                  <img src={image} style={{ width: "100%" }} alt={`IEEEDay ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="description">
              <p><strong>IEEE Day Celebration 2024</strong></p>
              <p><b>Secretary Team Lead and the Host of that Event</b></p>
            </div>
          </div>
  
          {/* Box 3 */}
          <div className="experience-box">
            <div className="slideshow-container">
              {[PearlHack1, PearlHack2, PearlHack3, PearlHack4, PearlHack5, PearlHack6, PearlHack7, PearlHack8, PearlHack9, PearlHack10].map((image, index) => (
                <div className={`slides ${index === currentSlidePearlHack ? "active" : ""}`} key={index}>
                  <img src={image} style={{ width: "100%" }} alt={`PearlHack ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="description">
              <p><strong>PearlHack 2023</strong></p>
              <p><b> Host of PearlHack 2023</b></p>
            </div>
          </div>
  
          {/* Box 4 */}
          <div className="experience-box">
          <div className="slideshow-container">
            <div className={`slides active`}>
              <img src={VolunteerOfMonth} style={{ width: "100%" }} alt="Volunteer Of the Month" />
            </div>
          </div>
          <div className="description">
            <p><strong>Volunteer Of the Month</strong></p>
            <p><b>IEEE Student Branch of SUSL volunteer for Octobor</b></p>
          </div>
        </div>
      </div>
  
      </section>
    );
  };
  
  export default Volunteering;