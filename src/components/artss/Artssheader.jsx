import React from "react";
import { Link } from "react-router-dom";

export default function Artssheader() {
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
          <h4>Art</h4>
        </div>
        <div className="sectop">
          <h1>Art</h1>
        </div>
        <div className="Catabutton">
          <Link to="/anime">
            <button className="tec">anime art</button>
          </Link>
          <Link to="/sketches">
            <button className="tec">art sketches</button>
          </Link>
          <Link to="/doodle">
            <button className="tec">doodle art</button>
          </Link>
          <Link to="/surreat">
            <button className="tec">surreat art</button>
          </Link>
          <Link to="/painting">
            <button className="tec">painting</button>
          </Link>
          
        </div>
        <div className="para">
          <p>
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
            tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
          </p>
        </div>
      </section>
    </>
  );
}
