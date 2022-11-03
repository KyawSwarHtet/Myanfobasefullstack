import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import Moment from "react-moment";
import { json, Link } from "react-router-dom";
import "../lastviedo/lastnews.css";
import "./sidebar.css"

const renderData = (data) => {
  return (
    <>
      <div className="sidebar">
        <div className="Trav-main">
          {data.map((data, index) => {
            return (
              <div className="postTrav" key={index}>
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
                  <h4>{data.title.substring(0, 80)}...</h4>
                  <p>{data.description.substring(0, 110)}...</p>
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
                        <Moment format="DD/MMM/YYYY">{data.createdAt}</Moment>
                      </span>
                    </div>

                    <div className="posticon">
                      <i className="uil uil-bookmark"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

function Sidebar(props) {
  const [Data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemPerPage, setitemPerPage] = useState(5);

  // const handleClick = (event) => {
  //     setcurrentPage(Number(event.target.id));
  // }

  const pages = [];
  for (let i = 1; i <= Math.ceil(Data.length / itemPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumber = pages.map((number) => {
    console.log(number);
    return (
      <div key={number} id={number}>
        {number}
      </div>
    );
  });

  const category = props.category;
  Moment.globalFormat = "DD MMM YYYY";

  

  useEffect(() => {
    fetch(`http://localhost:8080/api/postcate/${category}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [category]);

  return (
    <div>
      {renderData(currentItems)}
      <Pagination
        count={renderPageNumber.length}
        onChange={(event, value) => setcurrentPage(value)}
        color="primary"
        variant="outlined"
        
      ></Pagination>

      {/* {renderPageNumber} */}
    </div>
  );
}
export default Sidebar;
