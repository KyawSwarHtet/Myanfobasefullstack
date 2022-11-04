import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import "./sidebar.css";
// import { updatePostData } from "../../features/getCateData/getCateDatalice";
import Spinner from "../login/Spinner";
import Paginate from "../catepagerightbar/Paginate";

export default function Sidebar(props) {
  const [getCateData, setCateData] = useState();
  const category = props.category;
  Moment.globalFormat = "DD MMM YYYY";
  // const { cate } = useParams();
  // const getAllusers = props.getAllusers;
  // const getAllgetCateData = props.getAllgetCateData;
  // const { getCateData, isLoading, isError, message } = useSelector(
  //   (state) => state.getCateData
  // );
  // console.log("Education post is ", getCateData);
  useEffect(() => {
    const getAlldata = async () => {
      const reqdata = await fetch(
        `http://localhost:8080/api/postcate/${category}`
      );
      const res = await reqdata.json(); // JSON.parse(json);
      //   console.log("res data is ", res);
      return res;
    };
    getAlldata().then((data) => {
      setCateData(data);
    });
  }, [category]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <>
      {getCateData ? (
        getCateData.length > 0 ? (
          <>
            <div className="sidebar">
              <div className="Trav-main">
                {getCateData.map((data) => {
                  if (data.cateName === category) {
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
                          <Link
                            to={`/${category}/${data._id}`}
                            className={`${category}hover`}
                          >
                            <h4>{data.title.substring(0, 80)}...</h4>
                          </Link>
                          <p>{data.description.substring(0, 100)}...</p>
                          <div className="postbuttom">
                            <div className="postman">
                              <div className="postmanProfile">
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
