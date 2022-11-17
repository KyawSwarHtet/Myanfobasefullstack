import { Pagination, } from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import "./sidebar.css";
import "../../App.css";
import Spinner from "../login/Spinner";
import { themeContext } from "../../Context";
import { useContext } from "react";
<<<<<<< HEAD
  export default function Sidebar(props) {
=======
import SavePost from "./SavePost";
export default function Sidebar(props) {
>>>>>>> be1b7d450b53b811e95d1af37e540a31b0305f6d
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [currentPage, setcurrentPage] = useState(1);
  const [itemPerPage, setitemPerPage] = useState(5);
<<<<<<< HEAD
    const [getCateData, setCateData] = useState([]);
    const [Favlist, setFavlist] = useState(false)
  console.log("get cate Data", getCateData);
=======
  const [getCateData, setCateData] = useState([]);

>>>>>>> be1b7d450b53b811e95d1af37e540a31b0305f6d
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
      `https://desolate-hollows-16342.herokuapp.com/api/postcate/${category}`
      // `http://localhost:8080/api/postcate/${category}`
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

    console.log("current page", currentItems);
    
    const handleChange = (event) => {
      setFavlist(event.target.checked);
    };

  return (
    <>
<<<<<<< HEAD
      { currentItems.length > 0 ? (
          <>
            <div className="sidebar">
              <div className="Trav-main">
                {currentItems.map((data) => {
                  if (data.postAccept === true && data.cateName === category) {
                    return (
                      <div
                        id={darkMode ? "sidebar-white" : "sidebar-black"}
                        className="postTrav"
                      >
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
                            id={`${category}hover`}
                          >
                            <h4 className="colorh4">
                              {data.title.substring(0, 80)}...
                            </h4>
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
=======
      {currentItems.length > 0 ? (
        <>
          <div className="sidebar">
            <div className="Trav-main">
              {currentItems.map((data) => {
                if (data.postAccept === true && data.cateName === category) {
                  return (
                    <div
                      id={darkMode ? "sidebar-white" : "sidebar-black"}
                      className="postTrav"
                    >
                      <div className="Trav_img">
                        <img
                          src={`https://desolate-hollows-16342.herokuapp.com/${data.files[0].filePath}`}
                          // src={`http://localhost:8080/${data.files[0].filePath}`}
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
                          className={`colorBlack ${category}hover`}
                        >
                          <h4 className="colorh4">
                            {data.title.substring(0, 80)}...
                          </h4>
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
>>>>>>> be1b7d450b53b811e95d1af37e540a31b0305f6d
                            </div>
                            <span className="profileName">{data.username}</span>
                            <h5 className="profileDate">
                              <Moment format="DD/MMM/YYYY">
                                {data.createdAt}
                              </Moment>
                            </h5>
                          </div>
                          <div className="posticon">
                            {data && <SavePost getCateData={data} />}
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
