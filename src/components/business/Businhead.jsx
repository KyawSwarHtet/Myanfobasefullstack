import React from "react";
import { Link } from "react-router-dom";
export default function Businhead() {
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
            <h4>Business</h4>
          </Link>
        </div>
        <div className="travel-main">
          <h1>Business</h1>
        </div>
        <div className="button">
          <Link to="/oil">
            <button className="tec">Oil & Gas</button>
          </Link>
          <Link to="/consumer">
            <button className="tec">Consumer Services</button>
          </Link>
          <Link to="/tranding">
            <button className="tec">Tranding Goods</button>
          </Link>
          <Link to="/industrial">
            <button className="tec">Industrial</button>
          </Link>
          <Link to="/gems">
            <button className="tec">Gems & Jewelry</button>
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
}
