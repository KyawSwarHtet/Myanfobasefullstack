import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./categories.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { categories } from "./categoriesarray";

export default function Categorieslider() {
  return (
    <>
      <section className="categories container">
        <div className="categoriescolor">
          <div className="categories-header">
            <h2>Categories</h2>
            <span className="cate-para-line"></span>
          </div>
          <Swiper
            id="swiperdiv"
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="cates-swiper"
          >
            {categories
              .filter((val) => {
                return val;
              })

              .map((cate) => {
                return (
                  <SwiperSlide className="cate-swiper">
                    <div className="per-cate">
                      <div className="cate-image">
                        <img src={cate.image} alt="" />
                      </div>

                      <div className="swiperbody">
                        <h3>{cate.title}</h3>
                        <h5>{cate.articles} Articles</h5>

                        <Link to={cate.path}>
                          <span>C</span>heck Here
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            {/* <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cate-swiper">
            <div className="per-cate">
              <div>
                <img src="/images/homeimgs/catpolitical.jpg" alt="" />
              </div>
              <div>
                <h3>Political New</h3>
                <h5>How to travel Bagan? What should I do?</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>
            </div>
          </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
