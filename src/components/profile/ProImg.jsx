import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
const ProImg = (props) => {
  const user = props.user;
  console.log("user is ", user);
  return (
    <>
      <div className="ProHead">
        <div className="ProImg1">
          <img src="../../../public/images/art/art4.jpg" alt="" />
          {/* <i className="editPro uil uil-edit"></i> */}
        </div>
        <div className="ProData">
          <span> {user.username} </span>
          <p>Travelling is very nice.</p>
          <Link to="/editprofile">
            <button className="EdiProData">Edit Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProImg;
