import React from "react";
import { Link } from "react-router-dom";

export default function Blogger() {
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
        <h4>Beauty Blogger</h4>
      </div>
      <div className="sectop">
        <h1>Beauty Blogger</h1>
      </div>
      <div className="Catabutton">
         <Link to="/makeup">
          <button className="tec">Make-up</button>
          </Link>
          <button className="tec">Beauty Blogger</button>
           <Link to="/skincare">
          <button className="tec">Skin care</button>
          </Link>
        <Link to="/beautyclinic">
          <button className="tec">Beauty Clinic</button>
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
