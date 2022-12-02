import React from "react";
import { Link } from "react-router-dom";
import "../../../technology/technology.css";

export default function Chessheader() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4 className="capitalize">Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/sports" className="link1">
          <h4 className="capitalize">Sports</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4 className="capitalize">chess</h4>
      </div>
      <div className="sectop">
        <h1>chess</h1>
      </div>
      <div className="Catabutton">
        <Link to="/football">
          <button className="tec">football</button>
        </Link>
        <Link to="/boxing">
          <button className="tec">boxing</button>
        </Link>
        <Link to="/chess">
          <button className="tec btnactive">chess</button>
        </Link>
        <Link to="/cane">
          <button className="tec">cane ball</button>
        </Link>
        <Link to="/gamming">
          <button className="tec">gamming</button>
        </Link>
      </div>
    </section>
  );
}
