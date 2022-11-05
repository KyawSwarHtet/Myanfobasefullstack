import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import Axios from "axios";
import "./userdetail.css";
import "../sidebar/sidebar.css";

export default function UserDetail() {
  Moment.globalFormat = "D MMM YYYY";
  const [postDetail, setPostDetail] = useState({
    title: "",
    description: "",
    cateName: "",
    cateId: "",
    createdAt: "",
    userprofile: "",
    username: "",
    files: [],
  });

  const { id } = useParams();
  const { cate } = useParams();
  //   console.log("hhh", id);
  // console.log("vvv", postDetail);
  const editpostid = async () => {
    const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
    const res = await reqdata.json(); // JSON.parse(json);
    console.log("res data is ", res);
    return res;
  };
  useEffect(() => {
    editpostid().then((data) => {
      setPostDetail(data);
    });
  }, [id]);

  return (
    <>
      <div className="userdetail">
        <div>
          <Link to={`/${cate}`} className="userlink">
            <span>{cate}</span>
          </Link>

          <span>
            <i className="uil uil-angle-right-b"></i>
          </span>
          <span>detail page</span>
        </div>

        <div className="postdetail">
          <h3 className="userdetail-title">{postDetail.title} </h3>
          <Link to={`/${postDetail.cateName}`} className="link1">
            <button className={` cate${postDetail.cateName}`}>
              {postDetail.cateName}
            </button>
          </Link>
          <div className="postman">
            <div className="postmanProfile">
              {postDetail.userprofile === "" ||
              postDetail.userprofile[0] === "" ||
              postDetail.userprofile.length === 0 ? (
                <img src="./images/userprofile/defaultuserprofile.png" alt="" />
              ) : (
                <img
                  src={`http://localhost:8080/${postDetail.userprofile}`}
                  alt=""
                />
              )}
            </div>
            <span className="profileName">{postDetail.username}</span>
            <span className="profileDate">
              <Moment format="DD/MMM/YYYY">{postDetail.createdAt}</Moment>
            </span>
          </div>
          <p className="user-desc">{postDetail.description}</p>
        </div>
        {/* <div className="userdetail-button">
          <button className="detail-button1">Accept</button>
          <button className="detail-button2">Delete</button>
        </div> */}

        <div className="imgFlex">
          {postDetail.files === [] || postDetail.files.length === 0
            ? console.log("your image is empty")
            : postDetail.files.map((file, index) => {
                return (
                  <div className="userdetailimg">
                    {console.log("filePath is", file.filePath)}
                    <img
                      className="detailimguser"
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
