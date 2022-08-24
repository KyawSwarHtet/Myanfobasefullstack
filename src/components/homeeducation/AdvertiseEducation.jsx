import React from "react";
import "./advertiseeducation.css";

export default function AdvertiseEducation() {
  return (
    <div className="Advwrapper">
      <div className="advertisetitle">
        <h4>You Can Advertise Here!</h4>
        <span className="headerline"></span>
      </div>
      <div className="advTop">
        <div className="advimg">
          <img src="./images/homeimgs/adver1.jpg" alt="" />
          <span>
            BuyNow<i class="uil uil-angle-right-b"></i>
          </span>
        </div>
        <h4>Airpot 2Pro Comfortable your ear and nice sound</h4>
      </div>
      <div className="advBot">
        <div className="advimg">
          <img src="./images/homeimgs/adver2.jpg" alt="" />
          <span>
            BuyNow<i class="uil uil-angle-right-b"></i>
          </span>
        </div>
        <h4>If you buy the whole set you can GET 50% OFF</h4>
      </div>
    </div>
  );
}
