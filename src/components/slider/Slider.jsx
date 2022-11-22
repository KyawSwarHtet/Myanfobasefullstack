import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

export default function Slider() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { categories } = useSelector((state) => state.categories);

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
        {categories && categories.length !== 0 ? (
          categories.map((cate) => {
            return (
              <div className="darkslide">
                <SwiperSlide>
                  <Link
                    to={cate.catename}
                    className={darkMode ? "main-catwhite" : "main-catblack"}
                  >
                    <p>{cate.catename}</p>
                  </Link>
                </SwiperSlide>
              </div>
            );
          })
        ) : (
          <div>
            <h4>Loading...</h4>
          </div>
        )}
      </Swiper>
      <span className="swipper-bottom-line"></span>
    </>
  );
}
