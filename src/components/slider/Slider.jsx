import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { themeContext } from "../../Context";
import { useContext } from "react";
import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { categories } from "../categories/categoriesarray";

export default function Slider() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      
      <span className="swipper-bottom-line"></span>
      <Swiper
        id="SliderTop"
        slidesPerView={8}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="cat-text"
      >
        {categories.map((cate) => {
          return (
            <div className="darkslide">
              <SwiperSlide>
                <Link
                  to={cate.path}
                  className={darkMode ? "main-catwhite" : "main-catblack"}
                >
                  <p>{cate.title}</p>
                </Link>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <span className="swipper-bottom-line"></span>
    </>
  );
}
