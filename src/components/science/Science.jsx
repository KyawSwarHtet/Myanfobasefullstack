import React from "react";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import "./science.css";

export default function Science() {
  return (
    <>
      <section className="technology">
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

          <div className="iconRightArrow">
            <i className="uil uil-angle-right-b"></i>
          </div>

          <h4>Science</h4>
        </div>
        <div className="sectop">
          <h1>Science</h1>
        </div>
        <div className="Catabutton">
          <Link to="/astronomy">
            <button className="tec">Astronomy</button>
          </Link>
          <Link to="/biology">
            <button className="tec">Biology</button>
          </Link>
          <Link to="/chemistry">
            <button className="tec">Chemistry</button>
          </Link>
          <Link to="/earthscience">
            <button className="tec">Earth science</button>
          </Link>
          {/* <Link to="/mathematics">
            <button className="tec">Mathematics</button>
          </Link> */}
          <Link to="/plants">
            <button className="tec">Plants</button>
          </Link>
          <Link to="/physics">
            <button className="tec">Physics</button>
          </Link>
          <Link to="/mammals">
            <button className="tec">Mammals</button>
          </Link>
        </div>
        <div className="para">
          <p>
            How can the sky be blue one day and stormy the next? Why do heavy
            objects tend to fall downwards when dropped? How are birds able to
            fly (and why can't I do the same?)? Human beings have long been
            curious about the world in which we live, striving to identify
            connections among the phenomenons we witness and to understand how
            it all works.
          </p>
        </div>
      </section>
    </>
  );
}
