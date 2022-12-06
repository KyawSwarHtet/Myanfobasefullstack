import React, { useEffect } from "react";
import "./latestbar.css";
import { Link, useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { useState } from "react";

export default function LatestArticle(props) {
  const [lastposts, setLastPosts] = useState("");

  const getAlldata = async () => {
    const reqdata = await fetch(
      `https://desolate-hollows-16342.herokuapp.com/api/lastposts`
    );
    // const reqdata = await fetch(`http://localhost:8080/api/lastposts`);
    const res = await reqdata.json(); // JSON.parse(json);
    //   console.log("res data is ", res);
    return res;
  };

  useEffect(() => {
    getAlldata().then((data) => {
      setLastPosts(data);
    });
  }, []);

  console.log("latest post length is", lastposts.length);
  console.log("latest post is", lastposts);
  return (
    lastposts && (
      <div className="lastArt">
        <div className="lastnewbar-title">
          <h2>Latest Articles</h2>
          <span className="lasttitleline"></span>
        </div>

        <div className="lastnewbar-body sidebar1">
          {lastposts.length !== 0 ? (
            lastposts.map((data) => {
              if (data.postAccept === true) {
                return (
                  <div className="article-lastest">
                    <div className="lastnewimg">
                      <img
                        // src={`http://localhost:8080/${data.files[0].filePath}`}
                        src={data.files[0].filePath}
                        alt=""
                      />
                    </div>
                    <div className="lastnewinfo">
                      <Link
                        to={`/${data.cateName}/${data._id}`}
                        className={`colorBlack ${data.cateName}hover`}
                      >
                        <h4>{data.title.substring(0, 50)}...</h4>
                      </Link>
                      <div className="lastnewbuttondate">
                        <Link to={`/${data.cateName}`}>
                          <button className={` cate${data.cateName}`}>
                            {data.cateName}
                          </button>
                        </Link>
                        <h5 className="profileDate">
                          <Moment format="DD/MMM/YYYY">{data.createdAt}</Moment>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <div>
              <h3>No data here</h3>
            </div>
          )}
        </div>
      </div>
    )
  );
}
