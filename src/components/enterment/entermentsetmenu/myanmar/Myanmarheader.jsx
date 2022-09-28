import React from "react";
import { Link } from "react-router-dom";
import "../../../technology/technology.css";

export default function Myanmarheader() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4 className="capitalize">Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/entertainment" className="link1">
          <h4 className="capitalize">Entertainment</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4 className="capitalize">myanmar</h4>
      </div>
      <div className="sectop">
        <h1>Entertainment</h1>
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
          <button className="tec btnactive">myanmar</button>
        </Link>
      </div>
    </section>
  );
}
