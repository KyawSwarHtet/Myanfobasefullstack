import React from "react";
import "./theader.css";
import { Link } from "react-router-dom";
const Theader = () => {
  return (
    <>
      <section className="container travel">
        <div className="top">
          <Link to="/" className="link1">
            <h4>Home</h4>
          </Link>
          <div className="travel-icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          <Link to="/" className="link1">
            <h4>Travel</h4>
          </Link>
        </div>
        <div className="travel-main">
          <h1>Travel</h1>
        </div>
        <div className="Catabutton">
          <Link to="/pagoda">
            <button className="tec">Pagoda</button>
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
        <div className="para">
          <p>
            We've reviewed our advice for Myanmar. We continue to advise you 'do
            not travel' to Myanmar due to ongoing civil unrest and armed
            conflict. If it's safe to do so, leave Myanmar via commercial
            airline. Remain aware of the security environment at all times.
          </p>
        </div>
      </section>
    </>
  );
};

export default Theader;
