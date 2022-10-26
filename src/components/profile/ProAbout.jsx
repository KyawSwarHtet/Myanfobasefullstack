import React from "react";
import { useSelector, useDispatch } from "react-redux";
const ProAbout = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="ProAbout">
      <div className="About">
        <h3>About Profile</h3>
        <span className="lasttitleline About-line"></span>
      </div>
      <div className="ProAData">
        <h4>{user.username}</h4>
        <p>" {user.bio} "</p>
        <p>{user.email}</p>
        <p>{user.bod}</p>
        <p>{user.gender}</p>
        <p>{user.address}</p>
      </div>
    </div>
  );
};

export default ProAbout;
