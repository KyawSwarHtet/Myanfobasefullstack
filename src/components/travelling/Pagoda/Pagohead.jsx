import React from "react";
import { Link } from "react-router-dom";
export default function Pagohead() {
  return (
    <section className="travel container">
      <div className="top">
        <Link to="/" className="link1">
          <h4>Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/travel" className="link1">
          <h4>Travel</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4>Pagoda</h4>
      </div>
      <div className="sectop">
        <h1>Pagoda</h1>
      </div>
      <div className="Catabutton">
        <Link to="/pagoda">
          <button className="tec btnactive">Pagoda</button>
        </Link>
        <Link to="/beach">
          <button className="tec">Beach</button>
        </Link>
        <Link to="/waterfall">
          <button className="tec">Waterfall</button>
        </Link>
        <Link to="/mountains">
          <button className="tec">Mountains</button>
        </Link>
        <Link to="/Advanture_trip">
          <button className="tec">Advanture trip</button>
        </Link>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
