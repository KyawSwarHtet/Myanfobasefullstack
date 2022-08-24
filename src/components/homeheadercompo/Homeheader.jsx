import { Link } from "react-router-dom";
import Slider from "../slider/Slider.jsx";
import "./homeheader.css";
import "swiper/css/bundle";
import Popularslider from "../popularslider/Popularslider.jsx";

const HomeHeader = () => {
  return (
    <>
      <section className="homeheader">
        <div className="home-banner">
          <div className="home-banner-detail">
            <h1>MyanfobasE</h1>
            <h3>MYANMAR INFORMATION BASE</h3>
            <div className="search-banner">
              <input
                type="text"
                placeholder="Search in here...."
                id="searchinput"
              />
              <Link to="./search" className="search-button">
                <i className="uil uil-search"></i>
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
      {/* <span className="header-bottom-line"></span> */}
      <Slider />

      {/* text slider */}
      {/* <section className="categories">
        <div className="total-cat">
          <button className="cat-arrow-btn">
            <i class="uil uil-arrow-left"></i>
          </button>
          <h5>Entertainment&Pop Culture</h5>
          <h5>Techology</h5>
          <h5>History</h5>
          <h5>Travel</h5>
          <h5>Beauty</h5>
          <h5>Lifestyle&social issue</h5>
          <h5>Health&Medical</h5>
          <h5>Government</h5>

          <button className="cat-arrow-btn">
            <i class="uil uil-arrow-right"></i>
          </button>
        </div>
      </section> */}

      <section className="popular-header container">
        <div className="popular-title">
          <h2>Popular Now</h2>
          <span className="popular-now-line"></span>
        </div>
        <div className="popular-p">
          <Popularslider />
        </div>
      </section>
      <section className="popular-body container">
        <div className="first-grid">
          <div className="mask-div">
            <div className="maskimgdiv">
              <img src="/images/homeimgs/Wear-Mask-2.jpg" alt="" />
            </div>
            <div className="popular-bignew">
              <Link to="/health" className="cateHealth">
                <span className="health_button">Health</span>
              </Link>
              <h4>Where can I get some?</h4>
              <p>
                popular-health Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="SecondDiv">
            <div className="secGridfistphoto">
              <div className="travelpopular">
                <img src="images/homeimgs/popularland.jpg" alt="" />
              </div>
              <div className="popularsec-bg">
                <div className="popular-secnew">
                  <Link to="/travel" className="cateTravel">
                    Travel
                  </Link>
                  <p>Where can I get some?</p>
                </div>
              </div>
            </div>

            <div className="sec-grid">
              <div className="secGrid2ndphoto">
                <div className="fashion-img">
                  <img src="images/homeimgs/fashion.jpg" alt="" />
                </div>
                <div className="popular-thirdnew">
                  <Link to="/beauty" className="cateBeauty">
                    Beauty
                  </Link>
                  <p>Where can I get some?</p>
                </div>
              </div>
              <div className="secondGrid3rdphoto">
                <div className="culture-img">
                  <img src="images/homeimgs/bg2.jpg" alt="" />
                </div>
                <div className="popular-fouthnew">
                  <Link to="/history" className="cateHistory">
                    History
                  </Link>
                  <p>Where can I get some?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeHeader;
