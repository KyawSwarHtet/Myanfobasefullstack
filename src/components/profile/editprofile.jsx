import React from "react";

const EditProfile = () => {
  return (
    <>
      <div className="editprofile container">
        <h2 className="editsettitle">User Information</h2>
              <div className="editboder">
          <div className="userimgname">
            <div className="userimgdiv">
              <img
                className="userimage"
                src="../images/entertainment/korera/business.jpg"
                alt=""
              />
              <i className="editPro uil uil-edit"></i>
            </div>

            <div className="usernameadd">
              <h4>Chue Wathan Kyaw</h4>
              <h7>Yangon,Myanmar</h7>
            </div>
          </div>
          <div className="infoform">
            <div className="firstcol">
              <div className="namebox">
                <h6>Name</h6>
                <input
                  className="inputboxs"
                  type="text"
                  id=""
                  placeholder="Chue Wathan kyaw"
                />
              </div>
              <div className="namebox">
                <h6>Email Address</h6>
                <input
                  className="inputboxs"
                  type="text"
                  id=""
                  placeholder="email"
                />
              </div>
              <div className="namebox">
                <h6>Address</h6>
                <textarea
                  className="addresstexta"
                  type="text"
                  id=""
                  placeholder="address"
                />
              </div>
            </div>
            <div className="seccol">
              <div className="namebox">
                <h6>Bio</h6>
                <input
                  className="inputboxs"
                  type="text"
                  id=""
                  placeholder="your bio"
                />
              </div>
              <div className="namebox">
                <h6>Ph Number</h6>
                <input
                  className="inputboxs"
                  type="text"
                  id=""
                  placeholder="mobile number"
                />
              </div>
              <div className="namebox">
                <h6>Age</h6>
                <input
                  className="inputboxs"
                  type="text"
                  id=""
                  placeholder="age"
                />
              </div>
            </div>
          </div>
          <div className="editbuttondiv">
            <button className="editbutton">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
