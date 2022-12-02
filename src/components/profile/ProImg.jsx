import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
const ProImg = (props) => {
  const user = props.user;
  // console.log("user is ", user);
  return (
    <>
      <div className="ProHead">
        <div className="ProImg1">
          {user.profilePicture === [] ||
          user.profilePicture[0] === "" ||
          user.profilePicture.length === 0 ? (
            <img src="./images/userprofile/defaultuserprofile.png" alt="" />
          ) : (
            <img
              src={user.profilePicture[0].filePath}
              // src={`https://desolate-hollows-16342.herokuapp.com/${user.profilePicture[0].filePath}`}
              // src={`http://localhost:8080/${user.profilePicture[0].filePath}`}
              alt=""
            />
          )}
        </div>
        <div className="ProData">
          <span> {user.username} </span>
          <p>{user.bio}</p>
          <Link to="/editprofile">
            <button className="EdiProData">Edit Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProImg;
