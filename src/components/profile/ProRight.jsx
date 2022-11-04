import Paginate from "../catepagerightbar/Paginate";
import { Stack, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../travelling/travside.css";
import Moment from "react-moment";
import Spinner from "../login/Spinner";
import ReactReadMoreReadLess from "react-read-more-read-less";
import {
  deletePost,
  editPost,
  getPosts,
  reset,
} from "../../features/posts/postSlice";

function ProRight() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  Moment.globalFormat = "D MMM YYYY";
  const { user } = useSelector((state) => state.auth);

  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  console.log("admin posts", user);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getPosts());

    // return () => {
    //   dispatch(reset());
    // };
  }, [user._id, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div>
        <div className="lastnewbar-title">
          <h2 className="capitalize">My Posts</h2>
          <span className="lasttitleline Post-line"></span>
        </div>
        <div className="sidebar">
          <div className="Profile-main">
            {posts.length > 0 ? (
              posts.map((element) =>
                element.user === user._id ? (
                  <div key={element._id}>
                    <div className="postProfile">
                      <div className="Profile_img">
                        <img
                          src={`http://localhost:8080/${element.files[0].filePath}`}
                        />
                        <Link to={`/${element.cateName}`} className="link1">
                          <button
                            className={`profilecate cate${element.cateName}`}
                          >
                            {element.cateName}
                          </button>
                        </Link>
                      </div>
                      <div className="postProfile_info">
                        <h4>{element.title.substring(0, 80)}...</h4>
                        <p>
                          {/* <ReactReadMoreReadLess
                            readMoreClassName="readMoreClassName"
                            charLimit={120}
                            readMoreText="...Read More"
                            readLessText="...Read Less"
                          > */}
                          {element.description.substring(0, 110)}...
                          {/* </ReactReadMoreReadLess> */}
                        </p>
                        <div className="proFilebottom">
                          <div className="Profilepostman">
                            <div className="userProfile ">
                              {user.profilePicture === [] ||
                              user.profilePicture[0] === "" ||
                              user.profilePicture.length === 0 ? (
                                <img
                                  src="./images/userprofile/defaultuserprofile.png"
                                  alt=""
                                />
                              ) : (
                                <img
                                  src={`http://localhost:8080/${user.profilePicture[0].filePath}`}
                                  alt=""
                                />
                              )}
                            </div>
                            <span className="profileName">
                              {element.username}
                            </span>
                            <span className="profileDate">
                              <Moment format="DD/MMM/YYYY">
                                {element.createdAt}
                              </Moment>
                            </span>
                          </div>
                          <div className="Probuttom">
                            {element.postAccept !== true ? (
                              <div className="posticon1">
                                <div className="pendingTxt">
                                  <span>Pending Approve</span>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}

                            <div className="posticon1">
                              <div className="tooltip1 topdel">Delete</div>
                              <button
                                onClick={() =>
                                  dispatch(deletePost(element._id))
                                }
                                className="DeleteP "
                              >
                                <i className=" uil uil-trash-alt"></i>
                              </button>
                            </div>

                            <div className="posticon1">
                              <Link to={`/update/${element._id}`}>
                                <div className="tooltip1 topdel">Edit</div>
                                <button className="EditPost">
                                  <i className=" uil uil-edit"></i>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <Paginate /> */}
                  </div>
                ) : (
                  " "
                )
              )
            ) : (
              <h3>You have not set any post</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProRight;
