import React from "react";
import "./latestbar.css";
import { Link, useNavigate } from "react-router-dom";
import Moment from "react-moment";

export default function LatestArticle(props) {
  // const getAllposts = props.getAllposts;
  // Moment.globalFormat = "DD MMM YYYY";
  // let result = [];
  // for (let i = getAllposts.length - 1; i > getAllposts.length - 11; i--) {
  //   result.push(getAllposts[i]);
  // }

  return (
    <div className="lastArt">
      <div className="lastnewbar-title">
        <h2>Latest Articles</h2>
        <span className="lasttitleline"></span>
      </div>
      <div className="lastnewbar-body sidebar1">
        <div className="article-lastest">
          <div className="lastnewimg">
            <img src="./images/technology/robothand.jpg" alt="" />
          </div>
          <div className="lastnewinfo">
            <h4>Hello Lates Artilce title</h4>
            <div className="lastnewbuttondate">
              {/* <Link to={`/${data.cateName}`}>
                <button className={` cate${data.cateName}`}>
                  {data.cateName}
                </button>
              </Link> */}
              <span className="profileDate">
                {/* <Moment format="DD/MMM/YYYY">23.4.2223</Moment> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
