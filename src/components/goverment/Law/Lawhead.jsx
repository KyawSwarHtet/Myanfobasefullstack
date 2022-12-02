import React from "react";
import { Link } from "react-router-dom";
export default function Lawhead() {
  return (
    <section className="travel container">
      <div className="top">
        <Link to="/" className="link1">
          <h4>Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/govenment" className="link1">
          <h4>Goverment</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4>Law</h4>
      </div>
      <div className="sectop">
        <h1>Law</h1>
      </div>
      <div className="Catabutton">
        <Link to="/ministry">
          <button className="tec">Ministry</button>
        </Link>
        <Link to="/police_station">
          <button className="tec">Police Station</button>
        </Link>
        <Link to="/leader">
          <button className="tec">Leader</button>
        </Link>
        <Link to="/passport">
          <button className="tec">Passport</button>
        </Link>
        <Link to="/law">
          <button className="tec btnactive">Law</button>
        </Link>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
