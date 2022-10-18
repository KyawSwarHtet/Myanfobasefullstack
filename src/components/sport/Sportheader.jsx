import React from "react";
import { Link } from "react-router-dom";

export default function Sportheader() {
  return (
    <>
      <section className="container travel">
        <div className="top">
          <div className="homelink">
            <ul>
              <li>
                <Link to="/" className="link1">
                  <h4>Home</h4>
                </Link>
              </li>
            </ul>
          </div>
          {/* <h4>Home</h4> */}
          <div className="icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          {/* <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul> */}
          <h4>Sport</h4>
        </div>
        <div className="sectop">
          <h1>Sport</h1>
        </div>
        <div className="Catabutton">
          <Link to="/football">
            <button className="tec">football</button>
          </Link>
          <Link to="/boxing">
            <button className="tec">boxing</button>
          </Link>
          <Link to="/chess">
            <button className="tec">chess</button>
          </Link>
          <Link to="/cane">
            <button className="tec">cane ball</button>
          </Link>
          <Link to="/gamming">
            <button className="tec">gamming</button>
          </Link>
        </div>
        <div className="para">
          <p>
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </div>
      </section>
    </>
  );
}



