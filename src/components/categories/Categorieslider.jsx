import React, { useRef, useState, useEffect, useMemo } from "react";
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
import { useSelector } from "react-redux";

export default function Categorieslider() {
  const [categories, setCategories] = useState("");
  const { posts } = useSelector((state) => state.posts);

  const images = [
    {
      cateimage: "./images/homeimgs/k-artical4.jpg",
    },
    {
      cateimage: "./images/homeimgs/techhyperx.jpg",
    },
    {
      cateimage: "./images/homeimgs/viedo3.jpg",
    },
    {
      cateimage: "./images/homeimgs/political.jpg",
    },
    {
      cateimage: "./images/homeimgs/bg3.jpg",
    },
    {
      cateimage: "./images/homeimgs/school5.jpg",
    },
    {
      cateimage: "./images/homeimgs/school3.jpg",
    },
    {
      cateimage: "./images/homeimgs/lifestyle.jpeg",
    },
    {
      cateimage: "./images/homeimgs/c19.jpg",
    },
    {
      cateimage: "./images/homeimgs/sport.jpg",
    },
    {
      cateimage: "./images/homeimgs/art.jpg",
    },
    {
      cateimage: "./images/homeimgs/k-artical4.jpg",
    },
    {
      cateimage: "./images/homeimgs/c19.jpg",
    },
    {
      cateimage: "./images/homeimgs/lifestyle.jpeg",
    },
    {
      cateimage: "./images/homeimgs/k-artical4.jpg",
    },
    {
      cateimage: "./images/homeimgs/k-artical4.jpg",
    },
    {
      cateimage: "./images/homeimgs/k-artical4.jpg",
    },
  ];

  const CateArr = [];

  if (categories.length !== 0) {
    categories.map((data) => {
      CateArr.push({ category: data.catename, count: 0 });
    });
  }

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
  }, [posts]);

  const PostMemo = (posts) => {
    if (posts.length !== 0) {
      posts.map((data, index) => {
        if (CateArr.length !== 0) {
          CateArr.map((cate) => {
            if (cate.category == data.cateName && data.postAccept === true) {
              ++cate.count;
            }
          });
        }
      });
    }
    return CateArr;
  };
  const countChange = useMemo(() => {
    return PostMemo(posts);
  }, [categories]);
  console.log("Coun SSS", countChange);

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
            {countChange.length !== 0 ? (
              countChange.map((cate, index) => {
                return (
                  <SwiperSlide className="cate-swiper">
                    <div className="per-cate">
                      <div className="cate-image">
                        <img src={images[index].cateimage} alt="" />
                      </div>

                      <div className="swiperbody">
                        <h3>{cate.category}</h3>
                        <h5>{cate.count} Articles</h5>

                        <Link to={cate.category}>
                          <span>C</span>heck Here
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            ) : (
              <div>
                <h4>Loading....</h4>
              </div>
            )}

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
