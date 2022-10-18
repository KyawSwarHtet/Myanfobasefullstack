import React from "react";
import { Link } from "react-router-dom";

export default function Hfoods() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4>Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/healthy" className="link1">
          <h4>Healthy</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4>Healthy Foods</h4>
      </div>
      <div className="sectop">
        <h1>Healthy Foods</h1>
      </div>
      <div className="Catabutton">
        <Link to="/infodoctor">
          <button className="tec">Info Doctor</button>
        </Link>
        <Link to="/healthclinic">
          <button className="tec">Clinic</button>
        </Link>

        <Link to="/yoga">
          <button className="tec">Yoga</button>
        </Link>

        <button className="tec">Healthy Foods</button>
        <Link to="/medicine">
          <button className="tec">Medicine</button>
        </Link>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
