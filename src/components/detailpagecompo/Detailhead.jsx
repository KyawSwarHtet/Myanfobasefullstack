import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
// import Socialbar from "./Socialbar";
export default function Detailhead() {
  return (
    <section className="detailhead container">
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
        <Link to="/technology" className="link1">
          <h4>Technology</h4>
        </Link>
      </div>
      <div>
        <button className="cateTechnology detailcategory">Technology</button>
        <h1>How My Phone’s Most Annoying Feature Saved My Life</h1>
      </div>
      <div className="para">
        <p className="detailpara">
          Modern technology has become a total phenomenon for civilization, the
          defining force of a new social order in which efficiency is no longer
          an option but a necessity imposed on all human activity.
        </p>
      </div>
      <div className="postName1">
        <img src="../images/homeimgs/viedo4.jpg" alt="" />
        <div className="postwrite">
          <p>
            <span className="pName">Paina Ta Kon</span> - Senior EditorOct 1,
            2021
          </p>
          <span className="pDate">Updated 2022/02/15 at 3:38 AM</span>
        </div>
      </div>
      {/* <Socialbar /> */}
    </section>
  );
}
