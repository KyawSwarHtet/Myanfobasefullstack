import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import "./admin.css";
import { updatePostData } from "../../features/posts/postSlice";
import Spinner from "../login/Spinner";
import { deletePost, getPosts, reset } from "../../features/posts/postSlice";
import "../profile/profile.css";
export default function RequestForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  Moment.globalFormat = "D MMM YYYY";
  const { user } = useSelector((state) => state.auth);

  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  // console.log("post from redux is", posts);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getPosts());
  }, [user._id, navigate, isError, message, dispatch]);

  const approveAccetpt = async (id) => {
    posts.map((data) => {
      if (data._id === id) {
        let copyData = Object.assign({}, data);
        copyData.postAccept = true;
        console.log("real data", data);
        console.log("copyData", copyData);
        dispatch(updatePostData(copyData)).then(() => dispatch(getPosts()));
      }
    });
  };

  if (isLoading) {
    return <Spinner />;
  }

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
        {posts.length > 0 ? (
          posts.map((element, index) =>
            element.postAccept === false ? (
              <div key={element._id}>
                <div className="userpost-table">
                  <Link to="/admindetail" className="link1">
                    {element.files.length !== 0 ? (
                      <div className="admin-img">
                        <img
                          className="adminimg"
                          // src={`http://localhost:8080/${element.files[0].filePath}`}
                          // src={`https://desolate-hollows-16342.herokuapp.com/${element.files[0].filePath}`}
                          src={element.files[0].filePath}
                          alt=""
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                  <div className="userpost">
                    <Link
                      to={`/admindetail/${element._id}`}
                      className="adminlink"
                    >
                      <p className="user-title">{element.title}</p>
                    </Link>
                    <Link to={`/${element.cateName}`} className="link1">
                      <button className="admin-cate cateTravel">
                        {element.cateName}
                      </button>
                    </Link>

                    <div className="postman1">
                      <div className="postmanProfile1">
                        {element.userprofile === "" ||
                        element.userprofile[0] === "" ||
                        element.userprofile.length === 0 ? (
                          <img
                            src="./images/userprofile/defaultuserprofile.png"
                            alt=""
                          />
                        ) : (
                          <img
                            // src={`http://localhost:8080/${element.userprofile}`}
                            // src={`https://desolate-hollows-16342.herokuapp.com/${element.userprofile}`}
                            src={element.userprofile}
                            alt=""
                          />
                        )}
                      </div>
                      <span className="profileName1">{element.username}</span>

                      <span className="profileDate1">
                        <Moment format="DD/MMM/YYYY">
                          {element.createdAt}
                        </Moment>
                      </span>
                    </div>
                  </div>
                  <div className="admin-button">
                    <button
                      className="button1"
                      onClick={() => approveAccetpt(element._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="button2"
                      onClick={() => dispatch(deletePost(element._id))}
                    >
                      Delete
                    </button>
                    <Link to={`/admindetail/${element._id}`}>
                      <button className="button3">View</button>
                    </Link>
                  </div>
                </div>
                <span className="admin-span2"> </span>
              </div>
            ) : (
              ""
            )
          )
        ) : (
          <h2>No post here!</h2>
        )}
      </div>
    </>
  );
}
