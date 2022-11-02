import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { categories } from "../categories/categoriesarray";

export default function Slider() {
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
            <SwiperSlide>
              <Link to={cate.path} className="main-cat">
                <p>{cate.title}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <span className="swipper-bottom-line"></span>
    </>
  );
}
