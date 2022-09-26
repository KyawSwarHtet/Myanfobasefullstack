import react from "react"
import { Link } from "react-router-dom";

import "./admin.css"



export default function RequestForm() {
    return (
      <>
        <div className="requestform">
          <div className="request-title">
            <h1>Posts Request from Users</h1>
          </div>
          <div>
            <Link to="/admin" className="adminlink">
              <span>admin page </span>
            </Link>

            <span>
              <i className="uil uil-angle-right-b"></i>
            </span>
            <span>Request Form</span>
          </div>
          <span className="admin-span"> </span>
          <div className="userpost-table">
            <Link to="/admindetail" className="link1">
              <div className="admin-img">
                <img
                  className="adminimg"
                  src="./images/entertainment/cartoon/barbie.jpg"
                  alt=""
                />
              </div>
            </Link>
            <div className="userpost">
              <Link to="/admindetail" className="adminlink">
                <p className="user-title">Travel to Bagan in winter season</p>
              </Link>
              <Link to="/admindetail" className="link1">
                <button className="admin-cate cateTravel">Travel</button>
              </Link>

              <div className="postman1">
                <img src="./images/homeimgs/viedo4.jpg" alt="" />
                <span className="profileName1">Paina Ta Kon</span>
                <span className="profileDate1">20.3.2022</span>
              </div>
            </div>
            <div className="admin-button">
              <button className="button1">Accept</button>
              <button className="button2">Delete</button>
            </div>
          </div>
          <span className="admin-span2"> </span>
        </div>
      </>
    );
}

