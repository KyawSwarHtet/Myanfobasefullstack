import React from "react";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import "./literature.css";

export default function Literature() {
  return (
    <>
      <section className="technology">
        <div className="top">
          <div className="homelink">
            <ul>
              <li>
                <Link to="/" className="link1">
                  <h4>Home</h4>
                </Link>
              </li>
            </ul>
          </div>

          <div className="iconRightArrow">
            <i className="uil uil-angle-right-b"></i>
          </div>

          <h4>Literature</h4>
        </div>
        <div className="sectop">
          <h1>Literature</h1>
        </div>
        <div className="Catabutton">
          <Link to="/poetry">
            <button className="tec">Poetry</button>
          </Link>
          <Link to="/fiction">
            <button className="tec">Fiction</button>
          </Link>
          <Link to="/drama">
            <button className="tec">Drama</button>
          </Link>
          <Link to="/comedy">
            <button className="tec">Comedy</button>
          </Link>

          <Link to="/novel">
            <button className="tec">Novel</button>
          </Link>
          <Link to="/shortstory">
            <button className="tec">Short-Story</button>
          </Link>
          <Link to="/romance">
            <button className="tec">Romance</button>
          </Link>
        </div>
        <div className="para">
          <p>
            With the development of language, the human imagination has found a
            way to create and communicate through the written word. A literary
            work can transport us into a fictional, fantastic new world,
            describe a fleeting feeling, or simply give us a picture of the past
            through novels, poems, tragedies, epic works, and other genres.
          </p>
        </div>
      </section>
      <section className="photo">
        <div className="firstphoto">
          <div className="tech-firstphoto">
            <img
              className="fbphoto"
              src="./images/literature/literaturebanner1.jpg"
              alt=""
            />
          </div>
          <div className="firstpara">
            <button className="cateLiterature">Literature</button>
            <h4 className="literaturecolor">
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
                src="./images/literature/literaturebanner2.jpg"
                alt=""
              />
            </div>
            <div className="robotpara">
              <button className="cateLiterature">Literature</button>
              <h4 className="literaturecolor">
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
              <button className="cateLiterature">Literature</button>
              <h4 className="literaturecolor">
                Corsair HS80 RGB Wirless Gaming Headset Review
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
