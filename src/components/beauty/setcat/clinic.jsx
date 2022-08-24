import React from "react";
import { Link } from "react-router-dom";

export default function BeautyClinic() {
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
        <h4>Beauty Clinic</h4>
      </div>
      <div className="sectop">
        <h1>Beauty Clinic</h1>
      </div>
      <div className="Catabutton">
        <Link to="/makeup">
          <button className="tec">Make-up</button>
        </Link>
        <Link to="/Blogger">
          <button className="tec">Beauty Blogger</button>
        </Link>
        <Link to="/skincare">
          <button className="tec">Skin Care</button>
        </Link>
        <button className="tec">Beauty clinic</button>
        <Link to="/salon">
          <button className="tec">Beauty Salon</button>
        </Link>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
