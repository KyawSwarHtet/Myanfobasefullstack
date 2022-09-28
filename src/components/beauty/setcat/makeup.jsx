import React from "react";
import { Link } from "react-router-dom";

export default function Makeup() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4>Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/beauty" className="link1">
          <h4>Beauty</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4>Make-Up</h4>
      </div>
      <div className="sectop">
        <h1>Make-Up </h1>
      </div>
      <div className="Catabutton">
        <button className="tec">Make-up</button>
        <Link to="/Blogger">
          <button className="tec">Beauty Blogger</button>
        </Link>
        <Link to="/skincare">
          <button className="tec">Skin Care</button>
        </Link>
        <Link to="/beautyclinic">
          <button className="tec">Beauty clinic</button>
        </Link>

        <Link to="/salon">
          <button className="tec">Beauty Salon</button>
        </Link>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
