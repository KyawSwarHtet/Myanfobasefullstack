import "./admin.css";
import { Link } from "react-router-dom";
import { getMultipleFiles } from "../../data/api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function AdminDetail() {
  const [postDetail, setPostDetail] = useState([]);
    const [multipleFiles, setMultipleFiles] = useState([]);

  const { postid } = useParams();

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
      <div className="admindetail">
        <div>
          <Link to="/requestform" className="adminlink">
            <span>Request Form</span>
          </Link>

          <span>
            <i className="uil uil-angle-right-b"></i>
          </span>
          <span>detail page</span>
        </div>
        {multipleFiles.map((element, index) => (
          <div key={element._id}>
            <div className="admindetailimg">
              <img
                className="detailimg"
                src={`http://localhost:8080/${element.files[0].filePath}`}
                alt=" "
              />
            </div>
            <div className="postdetail">
              <h3 className="admindetail-title">{element.title} </h3>
              <button className="admindetail-cate cateTravel">
                {element.cateName}
              </button>
              <div className="postman1">
                <img src="./images/homeimgs/viedo4.jpg" alt="" />
                <span className="profileName1">Paina Ta Kon</span>
                <span className="profileDate1">20.3.2022</span>
              </div>
              <p className="user-desc">{element.description}</p>
            </div>
            <div className="admindetail-button">
              <button className="detail-button1">Accept</button>
              <button className="detail-button2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
