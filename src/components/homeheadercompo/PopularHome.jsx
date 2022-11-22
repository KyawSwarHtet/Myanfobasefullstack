import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./homeheader.css";

export default function PopularHome() {
  const [lastposts, setLastPosts] = useState("");
  const getAlldata = async () => {
    const reqdata = await fetch(
      `https://desolate-hollows-16342.herokuapp.com/api/popular`
    );
    // const reqdata = await fetch(`http://localhost:8080/api/popular`);
    const res = await reqdata.json(); // JSON.parse(json);
    //   console.log("res data is ", res);
    return res;
  };

  useEffect(() => {
    getAlldata().then((data) => {
      setLastPosts(data);
    });
  }, []);

  return (
    <div>
      {lastposts && (
        <section className="popular-body container">
          <div className="first-grid">
            <div className="mask-div">
              <div className="maskimgdiv">
                <img
                  src={`https://desolate-hollows-16342.herokuapp.com/${lastposts[0].files[0].filePath}`}
                  alt=""
                />
              </div>
              <div className="popular-bignew">
                <Link to={`/${lastposts[0].cateName}`}>
                  <button className={`cate${lastposts[0].cateName}`}>
                    {lastposts[0].cateName}
                  </button>
                </Link>
                <Link
                  to={`/${lastposts[0].cateName}/${lastposts[0]._id}`}
                  className={`whiteColor ${lastposts[0].cateName}hover`}
                >
                  <h4>{lastposts[0].title.substring(0, 80)}...</h4>
                </Link>

                <p>{lastposts[0].description.substring(0, 80)}...</p>
              </div>
            </div>
            <div className="SecondDiv">
              <div className="secGridfistphoto">
                <div className="travelpopular">
                  <img
                    src={`https://desolate-hollows-16342.herokuapp.com/${lastposts[1].files[0].filePath}`}
                    alt=""
                  />
                </div>
                <div className="popularsec-bg">
                  <div className="popular-secnew">
                    <Link to={`/${lastposts[1].cateName}`}>
                      <button className={`cate${lastposts[1].cateName}`}>
                        {lastposts[1].cateName}
                      </button>
                    </Link>
                    <Link
                      to={`/${lastposts[1].cateName}/${lastposts[1]._id}`}
                      className={`whiteColor ${lastposts[1].cateName}hover`}
                    >
                      <h4>{lastposts[1].title.substring(0, 80)}...</h4>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sec-grid">
                <div className="secGrid2ndphoto">
                  <div className="fashion-img">
                    <img
                      src={`https://desolate-hollows-16342.herokuapp.com/${lastposts[2].files[0].filePath}`}
                      alt=""
                    />
                  </div>
                  <div className="popular-thirdnew">
                    <Link to={`/${lastposts[2].cateName}`}>
                      <button className={`cate${lastposts[2].cateName}`}>
                        {lastposts[2].cateName}
                      </button>
                    </Link>
                    <Link
                      to={`/${lastposts[2].cateName}/${lastposts[2]._id}`}
                      className={`whiteColor ${lastposts[2].cateName}hover`}
                    >
                      <h4>{lastposts[2].title.substring(0, 50)}...</h4>
                    </Link>
                  </div>
                </div>
                <div className="secondGrid3rdphoto">
                  <div className="culture-img">
                    <img
                      src={`https://desolate-hollows-16342.herokuapp.com/${lastposts[3].files[0].filePath}`}
                      alt=""
                    />
                  </div>
                  <div className="popular-fouthnew">
                    <Link to={`/${lastposts[3].cateName}`}>
                      <button className={`cate${lastposts[3].cateName}`}>
                        {lastposts[3].cateName}
                      </button>
                    </Link>
                    <Link
                      to={`/${lastposts[3].cateName}/${lastposts[3]._id}`}
                      className={`whiteColor ${lastposts[3].cateName}hover`}
                    >
                      <h4>{lastposts[3].title.substring(0, 50)}...</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
