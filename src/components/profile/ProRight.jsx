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
          <div className="Trav-main">
            {posts.length > 0 ? (
              posts.map((element) =>
                element.user === user._id ? (
                  <div key={element._id}>
                    <div className="postTrav">
                      <div className="Trav_img">
                        {element.files.map((file) => {
                          return (
                            <img
                              src={`http://localhost:8080/${file.filePath}`}
                            />
                          );
                        })}

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
                          <div className="postman">
                            <button
                              onClick={() => dispatch(deletePost(element._id))}
                              className="DeleteP Delcolor"
                            >
                              Delete <i className=" uil uil-trash-alt"></i>
                            </button>
                          </div>
                          <div className="posticon">
                            <Link to={`/update/${element._id}`}>
                              <button className="EditPost Editcolor">
                                Edit <i className=" uil uil-edit"></i>
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
