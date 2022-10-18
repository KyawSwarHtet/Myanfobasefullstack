import React from "react";
import { Link } from "react-router-dom";

export default function Electronic() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4 className="capitalize">Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/technology" className="link1">
          <h4 className="capitalize">Technology</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4 className="capitalize">Electronic</h4>
      </div>
      <div className="sectop">
        <h1>Electronic</h1>
      </div>
      <div className="Catabutton">
        <Link to="/computer">
          <button className="tec">Computer</button>
        </Link>
        <Link to="/electronic">
          <button className="tec btnactive">Electronics</button>
        </Link>
        <Link to="/innovation">
          <button className="tec">Innovation</button>
        </Link>
        <Link to="/smartphone">
          <button className="tec">Smartphone</button>
        </Link>
        <Link to="/software">
          <button className="tec">Software</button>
        </Link>
      </div>
    </section>
  );
}
