import "./admin.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AdminDetail() {
  const [postDetail, setPostDetail] = useState([]);
  // const [multipleFiles, setMultipleFiles] = useState([]);

  const { id } = useParams();
  console.log("hhh", id);
  console.log("vvv", postDetail);

  useEffect(() => {
    const adminDetailId = async () => {
      const reqpost = await fetch(`http://localhost:8080/editpost/${id}`);
      const res = await reqpost.json();
      setPostDetail(await res);
    };
    adminDetailId();
  }, []);

  // const getMultipleFilesList = async () => {
  //   try {
  //     const fileslist = await getMultipleFiles();
  //     setMultipleFiles(fileslist);
  //     console.log(multipleFiles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getMultipleFilesList();
  // }, []);

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

        <div className="postdetail">
          <h3 className="admindetail-title">{postDetail.title} </h3>
          <button className="admindetail-cate cateTravel">
            {postDetail.cateName}
          </button>
          <div className="postman1">
            <img src="../images/homeimgs/viedo4.jpg" alt="" />
            <span className="profileName1">Paina Ta Kon</span>
            <span className="profileDate1">20.3.2022</span>
          </div>
          <p className="user-desc">{postDetail.description}</p>
        </div>
        <div className="admindetail-button">
          <button className="detail-button1">Accept</button>
          <button className="detail-button2">Delete</button>
        </div>

        <div>
          {postDetail.files.map((file, index) => {
            return (
              <div className="admindetailimg">
                {console.log("filePath is", file.filePath)}
                <img
                  className="detailimg"
                  src={`http://localhost:8080/${file.filePath}`}
                  alt=" "
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
