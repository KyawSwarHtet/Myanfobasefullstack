import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import EducationLeft from "./EducationLeft";
import EducationRight from "./EducationRight";
import "./trainingClass.css";

export default function TrainingClass() {
  const [getCateData, setCateData] = useState("");
  const category = "Education";
  Moment.globalFormat = "DD MMM YYYY";

  const getAlldata = async () => {
    const reqdata = await fetch(
      // `https://desolate-hollows-16342.herokuapp.com/api/postcate/${category}`
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

  // console.log("get data inside traingi", getCateData);

  return (
    <div className="classTop ">
      {getCateData.length !== 0 ? (
        getCateData.slice(0, 2).map((data) => {
          return (
            <article className="homeclass1">
              <div className="classimg">
                <img
                  src={data.files[0].filePath}
                  // src={`https://desolate-hollows-16342.herokuapp.com/${data.files[0].filePath}`}
                  // src={`http://localhost:8080/${data.files[0].filePath}`}
                  alt=""
                />
              </div>
              <Link
                to={`/${category}/${data._id}`}
                className={`colorBlack ${category}hover`}
              >
                <h4>{data.title.substring(0, 50)}...</h4>
              </Link>
              <div className="postman1">
                <div className="postmanProfile1">
                  {data.userprofile === "" ||
                  data.userprofile[0] === "" ||
                  data.userprofile.length === 0 ? (
                    <img
                      src="./images/userprofile/defaultuserprofile.png"
                      alt=""
                    />
                  ) : (
                    <img
                      src={data.userprofile}
                      // src={`https://desolate-hollows-16342.herokuapp.com/${data.userprofile}`}
                      // src={`http://localhost:8080/${data.userprofile}`}
                      alt=""
                    />
                  )}
                </div>
                <span className="profileName1">{data.username}</span>
                <span className="profileDate1">
                  <Moment format="DD/MMM/YYYY">{data.createdAt}</Moment>
                </span>
              </div>
              <p className="justify">{data.description.substring(0, 200)}...</p>
            </article>
          );
        })
      ) : (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
      <EducationLeft getData={getCateData} />
      <EducationRight getData={getCateData} />
    </div>
  );
}
