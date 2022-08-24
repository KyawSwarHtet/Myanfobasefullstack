import React from "react";
import "./sponserContent.css";

export default function SponserContent() {
  return (
    <div className="sponsered">
      <h4>Sponsered Content</h4>
      <span className="Lifeline1"></span>

      <div className="sponsered-1">
        <div className="beauty-photo">
          <img src="images/homeimgs/adver2.jpg" alt="" />
        </div>
        <div className="sponserAll">
          <p>Cosmetic Pics That Prove Jennifer is a Timeless Beauty</p>
          <div className="sponserBy">
            <i id="icon-3" className="uil uil-bell"></i>
            <span className="sponserText">Sponsered by</span>
            <span className="sponserBefore">Before</span>
          </div>
        </div>
      </div>

      <div className="sponsered-2">
        <div className="phone-photo">
          <img src="images/homeimgs/ph2.jpg" alt="" />
        </div>
        <div className="sponserAll">
          <p>Cosmetic Pics That Prove Jennifer is a Timeless Beauty</p>
          <div className="sponserBy">
            <i id="icon-3" className="uil uil-bell"></i>
            <span className="sponserText">Sponsered by</span>
            <span className="sponserBefore">Before</span>
          </div>
        </div>
      </div>

      <div className="sponsered-3">
        <div className="foodies-photo">
          <img src="images/homeimgs/lifestyle4.jpg" alt="" />
        </div>
        <div className="sponserAll">
          <p>Cosmetic Pics That Prove Jennifer is a Timeless Beauty</p>
          <div className="sponserBy">
            <i id="icon-3" className="uil uil-bell"></i>
            <span className="sponserText">Sponsered by</span>
            <span className="sponserBefore">Before</span>
          </div>
        </div>
      </div>
    </div>
  );
}
