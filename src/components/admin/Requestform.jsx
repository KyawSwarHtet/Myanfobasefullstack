import react from "react";
import { Link } from "react-router-dom";
import { getMultipleFiles } from "../../data/api";
import React, { useState, useEffect } from "react";

import "./admin.css";

export default function RequestForm() {
  const [multipleFiles, setMultipleFiles] = useState([]);

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMultipleFilesList();
  }, []);

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
        {multipleFiles.map((element, index) => (
          <div key={element._id}>
            <div className="userpost-table">
              <Link to="/admindetail" className="link1">
                <div className="admin-img">
                  <img
                    className="adminimg"
                    src={`http://localhost:8080/${element.files[0].filePath}`}
                    alt=""
                  />
                </div>
              </Link>
              <div className="userpost">
                <Link to="/admindetail" className="adminlink">
                  <p className="user-title">{element.title}</p>
                </Link>
                <Link to="/admindetail" className="link1">
                  <button className="admin-cate cateTravel">
                    {element.cateName}
                  </button>
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
                <Link to={`detail/${element._id}`}>
                  <button className="button3">view</button>
                </Link>
              </div>
            </div>
            <span className="admin-span2"> </span>
          </div>
        ))}
      </div>
    </>
  );
}
