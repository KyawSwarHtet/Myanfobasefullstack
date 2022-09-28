import React from "react";
import { Link } from "react-router-dom";

export default function Modern() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4>Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/lifestyles" className="link1">
          <h4>Lifestyle</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4>Modern</h4>
      </div>
      <div className="sectop">
        <h1>Modern</h1>
      </div>
      <div className="Catabutton">
        <Link to="/exercise">
          <button className="tec">Exercise</button>
        </Link>
        <Link to="/healthylife">
          <button className="tec">Healthy Life</button>
        </Link>
        <Link to="/luxury">
          <button className="tec">Luxury</button>
        </Link>

        <Link to="/family">
          <button className="tec">Family</button>
        </Link>

        <button className="tec">Modern</button>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
