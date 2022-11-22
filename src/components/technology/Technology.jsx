import { Link } from "react-router-dom";
import "./technology.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import { createTheme } from "@material-ui/core";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
};


export default function Technology() {
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  // let length = 0;
  // for (let i = posts.length - 1; i < posts.length - 4; i--) {
  //   console.log("this is", i, "times");
  // }

  return (
    <>
      <section className="technology">
        <div className="top">
          <div className="homelink">
            <ul>
              <li>
                <Link to="/" className="link1">
                  <h4>Home</h4>
                </Link>
              </li>
            </ul>
          </div>

          <div className="iconRightArrow">
            <i className="uil uil-angle-right-b"></i>
          </div>

          <h4>Technology</h4>
        </div>
        <div className="sectop">
          <h1>TECHNOLOGY</h1>
        </div>
        <div className="Catabutton">
          <Link to="/computer">
            <button className="tec">Computer</button>
          </Link>
          <Link to="/electronic">
            <button className="tec">Electronics</button>
          </Link>
          <Link to="/innovation">
            <button className="tec">Innovation</button>
          </Link>
          <Link to="/smartphone">
            <button className="tec">Smartphone</button>
          </Link>
          <Link to="/software">
            <button className="tec">Software</button>
          </Link>
        </div>
        <div className="para">
          <p>
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </div>
      </section>

      <section>
        <Box>
          <div className="photo">
            <Container maxWidth="xl">
              <Grid container direction="row" spacing={1}>
                <Grid item lg={8} md={12} sm={12}>
                  <div className="firstphoto">
                    <div className="tech-firstphoto">
                      <img
                        className="fbphoto"
                        src="./images/literature/literaturebanner1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="firstpara">
                      <button className="cateLiterature">Literature</button>

                      <Typography
                        className="literaturecolor"
                        variant="h4"
                        color="white"
                      >
                        How to Mark yourself 'Safe' on Socials Media
                      </Typography>
                      <p>
                        Modern technology has become a total phenomenon for
                        civilization, the defining force of a new social order
                        in which efficiency is no longer an option but a
                        necessity imposed on all human activity.
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={12}>
                  <div className="secphoto">
                    <Grid container direction="row" spacing={1}>
                      <Grid item lg={12} md={6} xs={12}>
                        <div className="secrobot">
                          <div className="tecsecdiv-firstphoto">
                            <img
                              className="robotphoto"
                              src="./images/literature/literaturebanner2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="robotpara">
                            <button className="cateLiterature">
                              Literature
                            </button>
                            <Typography
                              className="literaturecolor"
                              variant="h4"
                              color="white"
                            >
                              Corsair HS80 RGB Wirless Gaming Headset Review
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                      <Grid item lg={12} md={6} xs={12}>
                        <div className="secair">
                          <div className="tec-lastbannerphotos">
                            <img
                              className="airbudphoto"
                              src="./images/science/sciencebanner11.jpg"
                              alt=""
                            />
                          </div>
                          <div className="airbudpara">
                            <button className="cateLiterature">
                              Literature
                            </button>
                            <Typography
                              className="literaturecolor"
                              variant="h4"
                              color="white"
                            >
                              Corsair HS80 RGB Wirless Gaming Headset Review
                            </Typography>
                          </div>
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
    </>
  );
}
