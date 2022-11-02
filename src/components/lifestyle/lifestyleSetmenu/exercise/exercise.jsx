import React from "react";
import { Link } from "react-router-dom";

export default function Exercise() {
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
        <h4>Exercise</h4>
      </div>
      <div className="sectop">
        <h1>exercise</h1>
      </div>
      <div className="Catabutton">
        <button className="tec">Exercise</button>
        <Link to="/healthylife">
          <button className="tec">Healthy Life</button>
        </Link>
        <Link to="/Luxury">
          <button className="tec">Luxury</button>
        </Link>
        <Link to="/Family">
          <button className="tec">Family</button>
        </Link>
        <Link to="/Modern">
          <button className="tec">Modern</button>
        </Link>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
