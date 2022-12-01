import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./profile.css";
const Savepost = () => {
  const { user } = useSelector((state) => state.auth);
  const API_URL = "https://desolate-hollows-16342.herokuapp.com/api/";
  // const API_URL = "http://localhost:8080/api/";
  const [favData, setFavdata] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const getAllFav = async () => {
    await axios
      .post(API_URL + "getFavposts", user._id, config)
      .then((result) => {
        if (result.data.success) {
          return setFavdata(result.data.files);
        } else {
          alert("Failed to get saved");
        }
      });
  };

  useEffect(() => {
    getAllFav();
  }, []);

  // console.log("data of fav data in profile", favData);

  const RemoveFav = (id) => {
    console.log("id is ", id);

    const variable = {
      _id: id,
      user: user._id,
    };
    console.log("variable is ", variable);

    axios.post(API_URL + "removeFav", variable, config).then((result) => {
      if (result.data.success) {
        getAllFav();
      } else {
        alert("Failed to remove from favorite");
      }
    });
  };

  return (
    <div>
      <div className="savenewbar-title">
        <h2 className="capitalize">Save Posts</h2>
        <span className="savetitleline Post-line"></span>
      </div>
      <div className="savenewbar-body sidebar1">
        {favData.length !== 0 ? (
          favData.map((data) => {
            return (
              <>
                <div className="article-save">
                  <div className="savenewimg">
                    <img
                      src={data.files}
                      // src={`https://desolate-hollows-16342.herokuapp.com/${data.files}`}
                      alt=""
                    />
                  </div>
                  <div className="savenewinfo">
                    <Link
                      to={`/${data.cateName}/${data.postId}`}
                      className={`colorBlack ${data.cateName}hover`}
                    >
                      <h4 className="colorh4">
                        {data.title.substring(0, 80)}...
                      </h4>
                    </Link>
                    <div className="savenewbuttondate">
                      <Link to={`/${data.cateName}`} className="link1">
                        <button className={`cate${data.cateName}`}>
                          {data.cateName}
                        </button>
                      </Link>
                      <div
                        onClick={() => RemoveFav(data.postId)}
                        className="DeleteS Delcolor"
                      >
                        <i class="uil uil-bookmark">remove</i>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div>
            <h4>No Save posts data Here!</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Savepost;
