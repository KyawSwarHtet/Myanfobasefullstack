import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import "./homelifestyle.css";

export default function Lifestylenew() {
  const [getCateData, setCateData] = useState("");
  const category = "Lifestyles";
  Moment.globalFormat = "DD MMM YYYY";

  useEffect(() => {
    const getAlldata = async () => {
      const reqdata = await fetch(
        // `https://desolate-hollows-16342.herokuapp.com/api/postcate/${category}`
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

  // console.log("get all posts are", getCateData);

  return (
    <div className="thaw-1">
      {getCateData.length !== 0 ? (
        <>
          <div className="part-1">
            <div className="photo-exercise">
              <div className="exercise-photo">
                <img
                  className="photo-ex1"
                  src={getCateData[0].files[0].filePath}
                  // src={`https://desolate-hollows-16342.herokuapp.com/${getCateData[0].files[0].filePath}`}
                  // src={`http://localhost:8080/${getCateData[0].files[0].filePath}`}
                  alt=""
                />
                <Link to={`/${category}`} className="link1">
                  <button
                    className={`life-exbtn cateLifestyles cate${category}`}
                  >
                    {category}
                  </button>
                </Link>
              </div>
              <div className="paragraph">
                <Link
                  to={`/${category}/${getCateData[0]._id}`}
                  className={`colorBlack ${category}hover`}
                >
                  <h2>{getCateData[0].title.substring(0, 70)}...</h2>
                </Link>
                <div className="postman1">
                  <div className="postmanProfile1">
                    {getCateData[0].userprofile === "" ||
                    getCateData[0].userprofile[0] === "" ||
                    getCateData[0].userprofile.length === 0 ? (
                      <img
                        src="./images/userprofile/defaultuserprofile.png"
                        alt=""
                      />
                    ) : (
                      <img
                        src={getCateData[0].userprofile}
                        // src={`https://desolate-hollows-16342.herokuapp.com/${getCateData[0].userprofile}`}
                        // src={`http://localhost:8080/${getCateData[0].userprofile}`}
                        alt=""
                      />
                    )}
                  </div>
                  <span className="profileName1">
                    {getCateData[0].username}
                  </span>
                  <span className="profileDate1">
                    <Moment format="DD/MMM/YYYY">
                      {getCateData[0].createdAt}
                    </Moment>
                  </span>
                </div>

                <p>{getCateData[0].description.substring(0, 160)}...</p>
              </div>
            </div>
          </div>

          <div className="honey">
            {getCateData.length !== 0 ? (
              getCateData.slice(1, 4).map((data, index) => {
                return (
                  <div className="honey-1">
                    <div className="honeyImg">
                      <img
                        className="sunset-photo"
                        src={data.files[0].filePath}
                        // src={`https://desolate-hollows-16342.herokuapp.com/${data.files[0].filePath}`}
                        // src={`http://localhost:8080/${data.files[0].filePath}`}
                        alt=""
                      />
                    </div>
                    <div className="honey-paragraph">
                      <Link
                        to={`/${category}/${data._id}`}
                        className={`colorBlack ${category}hover`}
                      >
                        <h4>{data.title.substring(0, 30)}...</h4>
                      </Link>
                      <p>{data.description.substring(0, 110)}...</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h4>There has No Data or Loading !</h4>
              </div>
            )}
          </div>
        </>
      ) : (
        <div>
          <h4> Loading !</h4>
        </div>
      )}
    </div>
  );
}
