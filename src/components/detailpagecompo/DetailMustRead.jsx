import React from "react";
import "./detail.css"
import { Link } from "react-router-dom";


export default function DetailMustRead() {
  return (
    <section>
      <div className="mustread">
        <h2>Must Read</h2>
        <span className="must-read-line"></span>
      </div>
      <div className="mustread-maindiv">
        <div className="tec-mustread1">
          <div className="tecmust-buttonimg">
            <div className="tec-mustread-img1">
              <img src="../images/homeimgs/tecmustread1.jpg" alt="" />
            </div>
            <Link to="/beauty" className="Tecmust-button cateTechnology">
              Technology
            </Link>
          </div>
          <div className="tec-must-para">
            <h4>"Why Should I use the Apple products?"</h4>
            <p>jul 11,2022</p>
          </div>
        </div>
        <div className="tec-mustread2">
          <div className="tecmust-buttonimg">
            <div className="tec-mustread-img2">
              <img src="../images/homeimgs/tecmustread2.jpg" alt="" />
            </div>
            <Link to="/beauty" className="Tecmust-button cateTechnology">
              Technology
            </Link>
          </div>
          <div className="tec-must-para">
            <h4>"Why Should I use the Apple products?"</h4>
            <p>jul 11,2022</p>
          </div>
        </div>
        <div className="tec-mustread3">
          <div className="tecmust-buttonimg">
            <div className="tec-mustread-img3">
              <img src="../images/homeimgs/tecmustread3.jpg" alt="" />
            </div>
            <Link to="/beauty" className="Tecmust-button cateTechnology">
              Technology
            </Link>
          </div>
          <div className="tec-must-para">
            <h4>"Why Should I use the Apple products?"</h4>
            <p>jul 11,2022</p>
          </div>
        </div>
        <div className="tec-mustread4">
          <div className="tecmust-buttonimg">
            <div className="tec-mustread-img4">
              <img src="../images/homeimgs/tecmustread4.jpg" alt="" />
            </div>
            <Link to="/beauty" className="Tecmust-button cateTechnology">
              Technology
            </Link>
          </div>
          <div className="tec-must-para">
            <h4>"Why Should I use the Apple products?"</h4>
            <p>jul 11,2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
