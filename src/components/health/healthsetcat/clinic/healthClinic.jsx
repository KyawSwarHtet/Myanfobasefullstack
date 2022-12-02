import React from "react";
import { Link } from "react-router-dom";

export default function HealthClinic() {
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
        <h4>Clinic</h4>
      </div>
      <div className="sectop">
        <h1>Clinic</h1>
      </div>
          <div className="Catabutton">
              <Link to="/infodoctor">
        <button className="tec">Info Doctor</button>
              </Link>
       
          <button className="tec">Clinic</button>
       
        <Link to="/yoga">
          <button className="tec">Yoga</button>
        </Link>
        <Link to="/hfoods">
          <button className="tec">Healthy Foods</button>
        </Link>
        <Link to="/medicine">
          <button className="tec">Medicine</button>
        </Link>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
