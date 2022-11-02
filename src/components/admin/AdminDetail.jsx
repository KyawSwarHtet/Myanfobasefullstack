import "./admin.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import Axios from "axios";

export default function AdminDetail() {
  Moment.globalFormat = "D MMM YYYY";
  const [postDetail, setPostDetail] = useState({
    title: "",
    description: "",
    cateName: "",
    cateId: "",
    createdAt: "",
    username: "",
    files: [],
  });

  const { id } = useParams();
  console.log("hhh", id);
  // console.log("vvv", postDetail);
  const editpostid = async () => {
    const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
    const res = await reqdata.json(); // JSON.parse(json);
    console.log("res data is ", res);
    return res;
  };
  useEffect(() => {
    editpostid().then((data) => {
      setPostDetail({
        title: data.title,
        description: data.description,
        cateName: data.cateName,
        cateId: data.cateId,
        createdAt: data.createdAt,
        username: data.username,
        files: data.files,
      });
    });
  }, [id]);

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
            <span className="profileName1">{postDetail.username}</span>

            <span className="profileDate1">
              <Moment format="DD/MMM/YYYY">{postDetail.createdAt}</Moment>
            </span>
          </div>
          <p className="user-desc">{postDetail.description}</p>
        </div>
        {/* <div className="admindetail-button">
          <button className="detail-button1">Accept</button>
          <button className="detail-button2">Delete</button>
        </div> */}

        <div>
          {postDetail.files === [] || postDetail.files.length === 0
            ? console.log("your image is empty")
            : postDetail.files.map((file, index) => {
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
