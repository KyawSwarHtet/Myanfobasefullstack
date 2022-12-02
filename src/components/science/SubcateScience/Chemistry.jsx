import React from "react";
import { Link } from "react-router-dom";

export default function Chemistry() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4 className="capitalize">Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/science" className="link1">
          <h4 className="capitalize">Science</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4 className="capitalize">chemistry</h4>
      </div>
      <div className="sectop">
        <h1>chemistry</h1>
      </div>
      <div className="Catabutton">
        <Link to="/astronomy">
          <button className="tec">Astronomy</button>
        </Link>
        <Link to="/biology">
          <button className="tec">Biology</button>
        </Link>
        <Link to="/chemistry">
          <button className="tec btnactive">Chemistry</button>
        </Link>
        <Link to="/earthscience">
          <button className="tec">Earth science</button>
        </Link>

        <Link to="/plants">
          <button className="tec">Plants</button>
        </Link>
        <Link to="/physics">
          <button className="tec">Physics</button>
        </Link>
        <Link to="/mammals">
          <button className="tec">Mammals</button>
        </Link>
      </div>
    </section>
  );
}
