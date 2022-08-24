import React from "react";
import { Link } from "react-router-dom";
import "../../../technology/technology.css";

export default function Surreatheader() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4 className="capitalize">Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/arts" className="link1">
          <h4 className="capitalize">arts</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4 className="capitalize">surreat art</h4>
      </div>
      <div className="sectop">
        <h1>Arts</h1>
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
          <button className="tec btnactive">surreat art</button>
        </Link>
        <Link to="/painting">
          <button className="tec">painting</button>
        </Link>
      </div>
    </section>
  );
}

