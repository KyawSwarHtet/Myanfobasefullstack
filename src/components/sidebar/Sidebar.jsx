import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { updatePostData } from "../../features/posts/postSlice";
import Spinner from "../login/Spinner";
import Paginate from "../catepagerightbar/Paginate";

export default function Sidebar(props) {
  const [getCateData, setCateData] = useState();
  const category = props.category;
  Moment.globalFormat = "DD MMM YYYY";
  const { cate } = useParams();
  const getAllusers = props.getAllusers;
  // const getAllposts = props.getAllposts;
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  console.log("get cate is", category);
  console.log("pors cate is", category);

  // useEffect(() => {
  //   const getAlldata = async () => {
  //     const reqdata = await fetch(`http://localhost:8080/api/postcate/${cate}`);
  //     const res = await reqdata.json(); // JSON.parse(json);
  //     //   console.log("res data is ", res);
  //     return res;
  //   };
  //   getAlldata().then((data) => {
  //     setCateData(data);
  //   });
  // }, []);

  console.log("cate data in beauty  is", posts);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {posts ? (
        posts.length > 0 ? (
          <>
            <div className="sidebar">
              <div className="Trav-main">
                {posts.map((data) => {
                  if (data.postAccept === true && data.cateName === category) {
                    return (
                      <div className="postTrav">
                        <div className="Trav_img">
                          <img
                            src={`http://localhost:8080/${data.files[0].filePath}`}
                          />
                          <Link to={`/${data.cateName}`} className="link1">
                            <button className={`Travel1 cate${data.cateName}`}>
                              {data.cateName}
                            </button>
                          </Link>
                        </div>
                        <div className="postTrav_info">
                          <h4>{data.title}</h4>
                          <p>{data.description}</p>
                          <div className="postbuttom">
                            <div className="postman">
                              <div className=" ">
                                {data.userprofile === "" ||
                                data.userprofile[0] === "" ||
                                data.userprofile.length === 0 ? (
                                  <img
                                    src="./images/userprofile/defaultuserprofile.png"
                                    alt=""
                                  />
                                ) : (
                                  <img
                                    src={`http://localhost:8080/${data.userprofile}`}
                                    alt=""
                                  />
                                )}
                              </div>
                              <span className="profileName">
                                {data.username}
                              </span>
                              <span className="profileDate">
                                <Moment format="DD/MMM/YYYY">
                                  {data.createdAt}
                                </Moment>
                              </span>
                            </div>

                            <div className="posticon">
                              <i className="uil uil-bookmark"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
                <Paginate />
              </div>
            </div>
          </>
        ) : (
          <div className="sidebar">
            <h4>No Data is Here !!!</h4>
          </div>
        )
      ) : (
        <div className="sidebar">
          <Spinner />
        </div>
      )}
    </>
  );
}
