import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./homeheader.css";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function PopularHome() {
  const [lastposts, setLastPosts] = useState("");
  const getAlldata = async () => {
    // const reqdata = await fetch(
    //   `https://desolate-hollows-16342.herokuapp.com/api/popular`
    // );
    const reqdata = await fetch(`http://localhost:8080/api/popular`);
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
      {lastposts && lastposts.length !== 0 ? (
        <section className="popular-body container">
          <Box>
            <div className="first-grid">
              <Container maxWidth="xl">
                <Grid container direction="row" spacing={1}>
                  <Grid item md={7.6} sm={12} xs={12}>
                    <div className="mask-div">
                      <div className="maskimgdiv">
                        <img
                          src={lastposts[0].files[0].filePath}
                          // src={`https://desolate-hollows-16342.herokuapp.com/${lastposts[0].files[0].filePath}`}
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
                          <Typography variant="h6" color="white">
                            {lastposts[0].title.substring(0, 80)}...
                          </Typography>
                        </Link>

                        <Typography
                          variant="p"
                          color="white"
                          className="bignewsdesc"
                        >
                          {lastposts[0].description.substring(0, 80)}...
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4.4} sm={12} xs={12}>
                    <div className="SecondDiv">
                      <Grid container direction="column">
                        <Grid
                          item
                          md={8}
                          sm={4}
                          xs={12}
                          className="secGridfistphoto"
                        >
                          {lastposts.length <= 1 ? (
                            " "
                          ) : (
                            <>
                              <div className="travelpopular">
                                <img
                                  src={lastposts[1].files[0].filePath}
                                  // src={`https://desolate-hollows-16342.herokuapp.com/${lastposts[1].files[0].filePath}`}
                                  alt=""
                                />
                              </div>
                              <div className="popularsec-bg">
                                <div className="popular-secnew">
                                  <Link to={`/${lastposts[1].cateName}`}>
                                    <button
                                      className={`cate${lastposts[1].cateName}`}
                                    >
                                      {lastposts[1].cateName}
                                    </button>
                                  </Link>
                                  <Link
                                    to={`/${lastposts[1].cateName}/${lastposts[1]._id}`}
                                    className={`whiteColor ${lastposts[1].cateName}hover`}
                                  >
                                    <br></br>
                                    <Typography variant="p" color="white">
                                      {lastposts[1].title.substring(0, 80)}...
                                    </Typography>
                                  </Link>
                                </div>
                              </div>
                            </>
                          )}
                        </Grid>
                        <Grid item md={4} sm={8} xs={12}>
                          <div className="sec-grid">
                            <Grid container direction="row" spacing={1}>
                              <Grid
                                item
                                md={6}
                                sm={6}
                                xs={12}
                                className="secGrid2ndphoto"
                              >
                                {lastposts.length <= 2 ? (
                                  " "
                                ) : (
                                  <>
                                    <div className="fashion-img">
                                      <img
                                        src={lastposts[2].files[0].filePath}
                                        // src={`https://desolate-hollows-16342.herokuapp.com/${lastposts[2].files[0].filePath}`}
                                        alt=""
                                      />
                                    </div>
                                    <div className="popular-thirdnew">
                                      <Link to={`/${lastposts[2].cateName}`}>
                                        <button
                                          className={`cate${lastposts[2].cateName}`}
                                        >
                                          {lastposts[2].cateName}
                                        </button>
                                      </Link>
                                      <Link
                                        to={`/${lastposts[2].cateName}/${lastposts[2]._id}`}
                                        className={`whiteColor ${lastposts[2].cateName}hover`}
                                      >
                                        <br></br>

                                        <Typography variant="p" color="white">
                                          {lastposts[2].title.substring(0, 50)}
                                          ...
                                        </Typography>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </Grid>
                              <Grid
                                item
                                md={6}
                                sm={6}
                                xs={12}
                                className="secondGrid3rdphoto"
                              >
                                {lastposts.length <= 3 ? (
                                  " "
                                ) : (
                                  <>
                                    <div className="culture-img">
                                      <img
                                        src={lastposts[3].files[0].filePath}
                                        // src={`https://desolate-hollows-16342.herokuapp.com/${lastposts[3].files[0].filePath}`}
                                        alt=""
                                      />
                                    </div>
                                    <div className="popular-fouthnew">
                                      <Link to={`/${lastposts[3].cateName}`}>
                                        <button
                                          className={`cate${lastposts[3].cateName}`}
                                        >
                                          {lastposts[3].cateName}
                                        </button>
                                      </Link>
                                      <Link
                                        to={`/${lastposts[3].cateName}/${lastposts[3]._id}`}
                                        className={`whiteColor ${lastposts[3].cateName}hover`}
                                      >
                                        <br></br>

                                        <Typography variant="p" color="white">
                                          {lastposts[3].title.substring(0, 50)}
                                          ...
                                        </Typography>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Box>
        </section>
      ) : (
        <div>
          <h4>Loading..!</h4>
        </div>
      )}
    </>
  );
}
