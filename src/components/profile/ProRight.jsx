import Paginate from "../catepagerightbar/Paginate";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../travelling/travside.css";
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

  const { user } = useSelector((state) => state.auth);

  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getPosts());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

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

                        <p className="Travel1 cateTravel">{element.cateName}</p>
                      </div>
                      <div className="postTrav_info">
                        <h4>{element.title}</h4>
                        <p>
                          <ReactReadMoreReadLess
                            readMoreClassName="readMoreClassName"
                            charLimit={120}
                            readMoreText="...Read More"
                            readLessText="...Read Less"
                          >
                            {element.description}
                          </ReactReadMoreReadLess>
                        </p>

                        <div className="Probuttom">
                          <div className="posticon1">
                            <div className="tooltip1 top">Delete</div>
                            <button
                              onClick={() => dispatch(deletePost(element._id))}
                              className="DeleteP "
                            >
                              <i className=" uil uil-trash-alt"></i>
                            </button>
                          </div>
                          <div className="posticon1">
                            <Link to={`/update/${element._id}`}>
                              <div className="tooltip1 top">Edit</div>
                              <button className="EditPost">
                                <i className=" uil uil-edit"></i>
                              </button>
                            </Link>
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
