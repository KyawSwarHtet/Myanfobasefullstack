import React from "react";
import "../technology/technology.css";
import { Link } from "react-router-dom";
const HealthHeader = () => {
  return (
    <>
      <section className="technology">
        <div className="top">
          <div className="homelink">
            <ul>
              <li>
                <Link to="/" className="homelink1">
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
          <h4>Health & medicine</h4>
        </div>
        <div className="sectop">
          <h1>Health & medicine</h1>
        </div>
        <div className="Catabutton">
          <Link to="/infodoctor">
            <button className="tec">Info Doctor</button>
          </Link>
          <Link to="/healthclinic">
            <button className="tec">Clinic</button>
          </Link>
          <Link to="/yoga">
            <button className="tec">Yoga</button>
          </Link>
          <Link to="/hfoods">
            <button className="tec">Healthy Foods</button>
          </Link>
          <Link to="/medicine">
            <button className="tec">medicine</button>
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
};

export default HealthHeader;
