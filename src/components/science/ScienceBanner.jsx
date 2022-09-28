import React from "react";
// import "../technology/technology.css";
import "../technology/technology.css";

export default function ScienceBanner() {
  return (
    <section className="photo">
      <div className="firstphoto">
        <div className="tech-firstphoto">
          <img
            className="fbphoto"
            src="./images/science/sciencebanner1.jpg"
            alt=""
          />
        </div>
        <div className="firstpara">
          <button className="cateScience">Science</button>
          <h4 className="sciencecolor">
            How to Mark yourself 'Safe' on Socials Media
          </h4>
          <p>
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </div>
      </div>
      <div className="secphoto">
        <div className="secrobot">
          <div className="tecsecdiv-firstphoto">
            <img
              className="robotphoto"
              src="./images/science/scienceinfo9.jpg"
              alt=""
            />
          </div>
          <div className="robotpara">
            <button className="cateScience">Science</button>
            <h4 className="sciencecolor">
              Corsair HS80 RGB Wireless Gaming Headset Review
            </h4>
          </div>
        </div>
        <div className="secair">
          <div className="tec-lastbannerphotos">
            <img
              className="airbudphoto"
              src="./images/science/sciencebanner11.jpg"
              alt=""
            />
          </div>
          <div className="airbudpara">
            <button className="cateScience">science</button>
            <h4 className="sciencecolor">
              Corsair HS80 RGB Wirless Gaming Headset Review
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
