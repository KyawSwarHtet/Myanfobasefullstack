import { Pagination } from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import "./sidebar.css";
import Spinner from "../login/Spinner";

export default function Sidebar(props) {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemPerPage, setitemPerPage] = useState(5);
  const [getCateData, setCateData] = useState([]);
  console.log("get cate Data", getCateData);
  const category = props.category;
  Moment.globalFormat = "DD MMM YYYY";

  const pages = [];
  for (let i = 1; i <= Math.ceil(getCateData.length / itemPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = getCateData.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    console.log("number", number);
    return (
      <div key={number} id={number}>
        {number}
      </div>
    );
  });

  const getAlldata = async () => {
    const reqdata = await fetch(
      `http://localhost:8080/api/postcate/${category}`
    );
    const res = await reqdata.json(); // JSON.parse(json);
    //   console.log("res data is ", res);
    return res;
  };
  useEffect(() => {
    getAlldata().then((data) => {
      setCateData(data);
    });
  }, [category]);
  //  useEffect(() => {
  // fetch(`http://localhost:8080/api/postcate/${category}`)
  //    .then((response) => response.json())
  //    .then((json) => setCateData(json));
  // }, [category]);

  console.log("current page", currentItems);

  return (
    <>
      {currentItems.length > 0 ? (
        <>
          <div className="sidebar">
            <div className="Trav-main">
              {currentItems.map((data) => {
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
                            <span className="profileName">{data.username}</span>
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
              <Pagination
                count={renderPageNumbers.length}
                onChange={(event, value) => setcurrentPage(value)}
                color="primary"
                variant="outlined"
              ></Pagination>

              {/* <Paginate /> */}
            </div>
          </div>
        </>
      ) : (
        <div className="sidebar">
          <h4>No Data is Here !!!</h4>
        </div>
      )}
    </>
  );
}
