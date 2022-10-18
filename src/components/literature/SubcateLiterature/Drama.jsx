import React from "react";
import { Link } from "react-router-dom";

export default function Drama() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4 className="capitalize">Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/literature" className="link1">
          <h4 className="capitalize">Literature</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4 className="capitalize">drama</h4>
      </div>
      <div className="sectop">
        <h1>drama</h1>
      </div>
      <div className="Catabutton">
        <Link to="/poetry">
          <button className="tec">Poetry</button>
        </Link>
        <Link to="/fiction">
          <button className="tec">Fiction</button>
        </Link>
        <Link to="/drama">
          <button className="tec btnactive">Drama</button>
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
    </section>
  );
}
