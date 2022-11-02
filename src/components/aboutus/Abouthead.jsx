import React from 'react'
import { Link } from "react-router-dom";

export default function Abouthead() {
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

          <div className="icon">
            <i className="uil uil-angle-right-b"></i>
          </div>

          <h4>About us</h4>
        </div>
      </section>
    </>
  );
}
