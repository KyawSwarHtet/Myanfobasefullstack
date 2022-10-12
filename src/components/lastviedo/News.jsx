import React from "react";
import "./lastnews.css";
const News = () => {
  return (
    <>
      <div className="newspart">
        <div className="news">
          <div className="news_info ent_hover">
            <h4>18 Top Fall Fashion Trends from New York Fashion</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
            <div className="postbuttom">
              <div className="postman">
                <img src="./images/homeimgs/viedo4.jpg" alt="" />
                <span className="profileName">Paina Ta Kon</span>
                <span className="profileDate">20.3.2022</span>
              </div>
              <div className="posticon">
                <i className="uil uil-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="news_img">
            <img src="./images/homeimgs/viedo3.jpg" alt="" />
            <p className="entertainment cateEntertainment">Entertainment</p>
          </div>
        </div>
        <div className="news">
          <div className="news_info science_hover">
            <h4>18 Top Fall Fashion Trends from New York Fashion</h4>

            <p>
              All of the Best Looks From New York Fashion Week Fall/Winter
              2021.…
            </p>
            <div className="postbuttom">
              <div className="postman">
                <img src="./images/homeimgs/viedo4.jpg" alt="" />
                <span className="profileName">Paina Ta Kon</span>
                <span className="profileDate">20.3.2022</span>
              </div>
              <div className="posticon">
                <i className="uil uil-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="news_img">
            <img src="./images/homeimgs/science.jpg" alt="" />
            <p className="science cateScience">Science</p>
          </div>
        </div>
        <div className="news">
          <div className="news_info government_hover">
            <h4>18 Top Fall Fashion Trends from New York Fashion</h4>
            <p>
              All of the Best Looks From New York Fashion Week Fall/Winter
              2021.…
            </p>
            <div className="postbuttom">
              <div className="postman">
                <img src="./images/homeimgs/viedo4.jpg" alt="" />
                <span className="profileName">Paina Ta Kon</span>
                <span className="profileDate">20.3.2022</span>
              </div>
              <div className="posticon">
                <i className="uil uil-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="news_img">
            <img src="./images/homeimgs/political.jpg" alt="" />
            <p className="Newsdiv cateGovernment">Government</p>
          </div>
        </div>
        <div className="news">
          <div className="news_info technology_hover">
            <h4>18 Top Fall Fashion Trends from New York Fashion</h4>
            <p>
              All of the Best Looks From New York Fashion Week Fall/Winter
              2021.…
            </p>
            <div className="postbuttom">
              <div className="postman">
                <img src="./images/homeimgs/viedo4.jpg" alt="" />
                <span className="profileName">Paina Ta Kon</span>
                <span className="profileDate">20.3.2022</span>
              </div>
              <div className="posticon">
                <i className="uil uil-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="news_img">
            <img src="./images/homeimgs/technology.jpg" alt="" />
            <p className="Technology cateTechnology">Technology</p>
          </div>
        </div>
        <button className="btn btnlast">Show More</button>
      </div>
    </>
  );
};

export default News;
