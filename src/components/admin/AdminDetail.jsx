import "./admin.css";
import "../sidebar/sidebar.css";
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
    userprofile: "",
    files: [],
  });

  const { id } = useParams();
  console.log("hhh", id);
  // console.log("vvv", postDetail);
  const editpostid = async () => {
    const reqdata = await fetch(
      `https://desolate-hollows-16342.herokuapp.com/editpost/${id}`
    );
    // const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
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
          <Link to={`/${postDetail.cateName}`} className="link1">
            <button className={` cate${postDetail.cateName}`}>
              {postDetail.cateName}
            </button>
          </Link>
          {console.log("post detail img is", postDetail)}
          <div className="postman">
            <div className="postmanProfile">
              {postDetail.userprofile === "" ||
              postDetail.userprofile[0] === "" ||
              postDetail.userprofile.length === 0 ? (
                <img
                  src="../images/userprofile/defaultuserprofile.png"
                  alt=""
                />
              ) : (
                <img
                  // src={`https://desolate-hollows-16342.herokuapp.com/${postDetail.userprofile}`}
                  src={postDetail.userprofile}
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
        {/* <div className="admindetail-button">
          <button className="detail-button1">Accept</button>
          <button className="detail-button2">Delete</button>
        </div> */}

        <div className="adminDetailImg">
          {postDetail.files === [] || postDetail.files.length === 0
            ? console.log("your image is empty")
            : postDetail.files.map((file, index) => {
                return (
                  <div className="admindetailimg">
                    {console.log("filePath is", file.filePath)}
                    <img
                      className="detailimg"
                      // src={`https://desolate-hollows-16342.herokuapp.com/${file.filePath}`}
                      src={file.filePath}
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
