import React from "react";
import "./profile.css";
const ProImg = (props) => {
  const user = props.user;
  console.log("user is ", user);
  return (
    <>
      <div className="ProHead">
        <div className="ProImg1">
          <img src="../../../public/images/art/art4.jpg" alt="" />
          <i className="editPro uil uil-edit"></i>
        </div>
        <div className="ProData">
          <span> {user.username} </span>
          <p>Travelling is very nice.</p>
          <button className="EdiProData">Edit Profile</button>
        </div>
      </div>
    </>
  );
};

export default ProImg;
