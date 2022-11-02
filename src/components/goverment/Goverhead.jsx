import React from "react";
import { Link } from "react-router-dom";

export default function Goverhead() {
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
          <h4>Government</h4>
        </div>
        <div className="sectop">
          <h1>Government</h1>
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
            <button className="tec">Law</button>
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


