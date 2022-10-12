import React from "react";
import { Link } from "react-router-dom";

export default function Entermentheader() {
  return (
    <>
      <section className="container travel">
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
          {/* <h4>Home</h4> */}
          <div className="icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          {/* <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul> */}
          <h4>Entertainment</h4>
        </div>
        <div className="sectop">
          <h1>ENTERTAINMENT</h1>
        </div>
        <div className="Catabutton">
          <Link to="/korean">
            <button className="tec">korean</button>
          </Link>
          <Link to="/movie">
            <button className="tec">movie</button>
          </Link>
          <Link to="/cartoon">
            <button className="tec">cartoon</button>
          </Link>
          <Link to="/cinema">
            <button className="tec">cinema</button>
          </Link>
          <Link to="/music">
            <button className="tec">music</button>
          </Link>
          <Link to="/asian">
            <button className="tec">asian</button>
          </Link>
          <Link to="/myanmar">
            <button className="tec">myanmar</button>
          </Link>
        </div>
        <div className="para">
          <p>
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </div>
      </section>
    </>
  );
}
