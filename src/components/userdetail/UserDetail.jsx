import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import Axios from "axios";
import "./userdetail.css";
import "../sidebar/sidebar.css";
import SavePost from "../sidebar/SavePost";

export default function UserDetail() {
  Moment.globalFormat = "D MMM YYYY";
  const [postDetail, setPostDetail] = useState("");

  const { id } = useParams();
  const { cate } = useParams();

  useEffect(() => {
    editpostid().then((data) => {
      setPostDetail(data);
    });
  }, []);

  const editpostid = async () => {
    // const reqdata = await fetch(`https://desolate-hollows-16342.herokuapp.com/detailwithview/${id}`);
    const reqdata = await fetch(`http://localhost:8080/detailwithview/${id}`);
    const res = await reqdata.json(); // JSON.parse(json);
    console.log("res data is ", res);
    return res;
  };
  console.log("detail form viewcount is", postDetail.viewcount);
  return (
    <>
      {postDetail && (
        <div className="userdetail" key={id}>
          <div>
            <Link to={`/${cate}`} className="userlink">
              <span>{cate}</span>
            </Link>

            <span>
              <i className="uil uil-angle-right-b"></i>
            </span>
            <span>detail page</span>
          </div>

          <div className="postdetail" key={id}>
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
                  <img
                    src="./images/userprofile/defaultuserprofile.png"
                    alt=""
                  />
                ) : (
                  <img
                    src={postDetail.userprofile}
                    // src={`https://desolate-hollows-16342.herokuapp.com/${postDetail.userprofile}`}
                    // src={`http://localhost:8080/${postDetail.userprofile}`}
                    alt=""
                  />
                )}
              </div>
              <span className="profileName">{postDetail.username}</span>
              <span className="profileDate">
                <Moment format="DD/MMM/YYYY">{postDetail.createdAt}</Moment>
              </span>

              <SavePost getCateData={postDetail} />
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
                        src={file.filePath}
                        // src={`https://desolate-hollows-16342.herokuapp.com/${file.filePath}`}
                        // src={`http://localhost:8080/${file.filePath}`}
                        alt=" "
                      />
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </>
  );
}
