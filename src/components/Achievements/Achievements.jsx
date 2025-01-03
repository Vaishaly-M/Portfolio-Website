import React from "react";
import "./Achievements.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import CWWIE from "../../img/CWWIE.jpg";
import INSL from "../../img/INSL23 (3).jpg";
import Codesprint from "../../img/Codesprint (1).jpg";

const Achievements = () => {
  const clients = [
    {
      img: CWWIE,
      review:
        "Winners of Code With WIE 2024",
    },
    {
      img: INSL,
      review:
        "Top 10 Finalist of INSL Provincial Competition 2023",
    },
    {
      img: Codesprint,
      review:
        "Participants of CODESPRINT 2024 conducted by IIT",
    },
    
  ];

  return (
    <div className="t-wrapper" id="achievements">
      <div className="t-heading">
        <span>My Recent </span> <br />
        <span style={{color: "var(--maroon)"}}>Achievements and </span>
        <span>Participations...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2, // Show 2 slides on tablets
          },
          1024: {
            slidesPerView: 3, // Show 3 slides on desktop
          },
        }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="achievements">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Achievements;
