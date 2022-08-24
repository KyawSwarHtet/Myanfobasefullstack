import React from "react";
import { Link } from "react-router-dom";
export default function Univerhead() {
  return (
    <section className="travel container">
      <div className="top">
        <Link to="/" className="link1">
          <h4>Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/travel" className="link1">
          <h4>Education</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4>University & Collage</h4>
      </div>
      <div className="sectop">
        <h1>University & Collage</h1>
      </div>
      <div className="Catabutton">
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
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
