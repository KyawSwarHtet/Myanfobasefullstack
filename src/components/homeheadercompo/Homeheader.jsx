import { Link } from "react-router-dom";
import Slider from "../slider/Slider.jsx";
import "./homeheader.css";
import "swiper/css/bundle";
import Popularslider from "../popularslider/Popularslider.jsx";
import { themeContext } from "../../Context";
import { useContext } from "react";
import PopularHome from "./PopularHome.jsx";

const HomeHeader = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <section className="homeheader">
        <div className="home-banner">
          <div className="home-banner-detail">
            <h1>MyanfobasSE</h1>
            <h3>MYANMAR INFORMATION BASE</h3>
            <div className="search-banner">
              <Link to="/search">
                <input
                  type="text"
                  placeholder="Search in here...."
                  id="searchinput"
                />

                <i className="search-button uil uil-search"></i>
              </Link>
            </div>
            <div className="banner-botton">
              <h2>Welcome to our Page</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Slider />

      <section className="popular-header container">
        <div className="popular-title">
          <h2
            className={darkMode ? " populartitle-white" : "populartitle-black"}
          >
            Popular Now
          </h2>
          <span className="popular-now-line"></span>
        </div>
        <div className="popular-p">
          <Popularslider />
        </div>
      </section>
      <PopularHome />
    </>
  );
};
export default HomeHeader;
