import React from "react";
import { Link } from "react-router-dom";
export default function Relihead() {
  return (
    <section className="travel container">
      <div className="top">
        <Link to="/" className="link1">
          <h4>Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/history" className="link1">
          <h4>History</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4>Religion</h4>
      </div>
      <div className="sectop">
        <h1>Religion</h1>
      </div>
      <div className="Catabutton">
        <Link to="/culture">
          <button className="tec">Culture</button>
        </Link>
        <Link to="/dynasty">
          <button className="tec">Dynasty</button>
        </Link>
        <Link to="/religion">
          <button className="tec btnactive">Religion</button>
        </Link>
        <Link to="/dress">
          <button className="tec">Dress Code</button>
        </Link>
        <Link to="/region">
          <button className="tec">Region & State</button>
        </Link>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
