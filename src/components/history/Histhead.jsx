import React from "react";
import { Link } from "react-router-dom";

export default function Goverhead() {
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
          <h4>Government</h4>
        </div>
        <div className="sectop">
          <h1>Government</h1>
        </div>
        
          <div className="button">
            <Link to="/culture">
              <button className="tec">Culture</button>
            </Link>
            <Link to="/dynasty">
              <button className="tec">Dynasty</button>
            </Link>
            <Link to="/religion">
              <button className="tec">Religion</button>
            </Link>
            <Link to="/dress">
              <button className="tec">Dress Code</button>
            </Link>
            <Link to="/region">
              <button className="tec">Region & State</button>
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
