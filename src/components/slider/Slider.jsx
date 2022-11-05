import React, { useRef, useState, useEffect } from "react";
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

export default function Slider() {
  const [categories, setCategories] = useState("");
  const getAlldata = async () => {
    const reqdata = await fetch(`http://localhost:8080/api/category`);
    const res = await reqdata.json(); // JSON.parse(json);
    //   console.log("res data is ", res);
    return res;
  };
  useEffect(() => {
    getAlldata().then((data) => {
      setCategories(data);
    });
  }, []);

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
        {categories.length !== 0 ? (
          categories.map((cate) => {
            return (
              <SwiperSlide>
                <Link to={cate.catename} className="main-cat">
                  <p>{cate.catename}</p>
                </Link>
              </SwiperSlide>
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
