import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { themeContext } from "../../Context";
import { useContext } from "react";

import "./popularslider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Popularslider() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="Popularswiper container"
      >
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={darkMode ? "popular-white" : "popular-dark"}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
