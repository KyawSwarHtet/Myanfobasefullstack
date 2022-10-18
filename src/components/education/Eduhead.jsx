import React from "react";
import { Link } from "react-router-dom";
export default function Eduhead() {
  return (
    <>
      <section className="container travel">
        <div className="top">
          <Link to="/" className="link1">
            <h4>Home</h4>
          </Link>
          <div className="travel-icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          <Link to="/" className="link1">
            <h4>Education</h4>
          </Link>
        </div>
        <div className="travel-main">
          <h1>Education</h1>
        </div>
        <div className="button">
          <Link to="/university">
            <button className="tec">University & Collage</button>
          </Link>
          <Link to="/elementary">
            <button className="tec">Elementary School</button>
          </Link>
          <Link to="/private">
            <button className="tec">Private School</button>
          </Link>
          <Link to="/online">
            <button className="tec">Online Class</button>
          </Link>
          <Link to="/equality">
            <button className="tec">Equality-Education </button>
          </Link>
        </div>
        <div className="para">
          <p>
            We've reviewed our advice for Myanmar. We continue to advise you 'do
            not travel' to Myanmar due to ongoing civil unrest and armed
            conflict. If it's safe to do so, leave Myanmar via commercial
            airline. Remain aware of the security environment at all times.
          </p>
        </div>
      </section>
    </>
  );
}
