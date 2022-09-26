import React from "react";
import "./profile.css";
const ProImg = () => {
  return (
    <>
      <div className="ProHead">
        <div className="ProImg1">
          <img src="../images/profile/profile.jpg" alt="" />
          <i className="editPro uil uil-edit"></i>
        </div>
        <div className="ProData">
          <span> Thung Htike Htoo</span>
          <p>Travelling is very nice.</p>
          <button className="EdiProData">Edit Profile</button>
        </div>
      </div>
    </>
  );
};

export default ProImg;
