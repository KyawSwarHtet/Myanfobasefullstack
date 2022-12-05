import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Moment from "react-moment";
import "./lastnews.css";
import { Container, Grid, Box } from "@mui/material";
const News = () => {
  const [lastposts, setLastPosts] = useState("");
  const [visible, setVisible] = useState(4);
  Moment.globalFormat = "DD MMM YYYY";

  const showMore = () => {
    setVisible((prevValue) => prevValue + 2);
  };
  // console.log("visible initilal  is", visible);
  const getAlldata = async () => {
    // const reqdata = await fetch(
    //   `https://desolate-hollows-16342.herokuapp.com/api/lastposts`
    // );
    const reqdata = await fetch(`http://localhost:8080/api/lastposts`);
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
    <>
      <div className="newspart">
        {lastposts.length !== 0 ? (
          lastposts.slice(0, visible).map((data) => {
            if (data.postAccept === true) {
              return (
                <>
                  <Box>
                    <div className="news">
                      <Container maxWidth="xl">
                        <Grid container direction="row" spacing={1}>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                            <div className="news_info ent_hover">
                              <Link
                                to={`/${data.cateName}/${data._id}`}
                                className={`colorBlack ${data.cateName}hover`}
                              >
                                <h4>{data.title.substring(0, 50)}...</h4>
                              </Link>
                              <p>{data.description.substring(0, 130)}...</p>
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
                                        src={data.userprofile}
                                        // src={`https://desolate-hollows-16342.herokuapp.com/${data.userprofile}`}
                                        // src={`http://localhost:8080/${data.userprofile}`}
                                        alt=""
                                      />
                                    )}
                                  </div>
                                  <span className="profileName">
                                    {data.username}
                                  </span>
                                  <h5 className="profileDate">
                                    <Moment format="DD/MMM/YYYY">
                                      {data.createdAt}
                                    </Moment>
                                  </h5>
                                </div>
                                {/* <div className="posticon">
                          <i className="uil uil-bookmark"></i>
                        </div> */}
                              </div>
                            </div>
                          </Grid>

                          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                            <div className="news_img">
                              <img
                                src={data.files[0].filePath}
                                // src={`https://desolate-hollows-16342.herokuapp.com/${data.files[0].filePath}`}
                                // src={`http://localhost:8080/${data.files[0].filePath}`}
                                alt=""
                              />
                              <Link to={`/${data.cateName}`} className="link1">
                                <button
                                  className={`entertainment cate${data.cateName}`}
                                >
                                  {data.cateName}
                                </button>
                              </Link>
                            </div>
                          </Grid>
                        </Grid>
                      </Container>
                    </div>
                  </Box>
                </>
              );
            }
          })
        ) : (
          <div>
            <h4>Loading ....</h4>
          </div>
        )}
        <button onClick={showMore} className="btn btnlast">
          Show More
        </button>
      </div>
    </>
  );
};

export default News;
