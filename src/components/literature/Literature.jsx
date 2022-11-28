import React from "react";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import "./literature.css";
import "../technology/technology.css";
import { Box, Container, Grid, Typography} from "@mui/material";



export default function Literature() {
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

          <h4>Literature</h4>
        </div>
        <div className="sectop">
          <h1>Literature</h1>
        </div>
        <div className="Catabutton">
          <Link to="/poetry">
            <button className="tec">Poetry</button>
          </Link>
          <Link to="/fiction">
            <button className="tec">Fiction</button>
          </Link>
          <Link to="/drama">
            <button className="tec">Drama</button>
          </Link>
          <Link to="/comedy">
            <button className="tec">Comedy</button>
          </Link>

          <Link to="/novel">
            <button className="tec">Novel</button>
          </Link>
          <Link to="/shortstory">
            <button className="tec">Short-Story</button>
          </Link>
          <Link to="/romance">
            <button className="tec">Romance</button>
          </Link>
        </div>
        <div className="para">
          <p>
            With the development of language, the human imagination has found a
            way to create and communicate through the written word. A literary
            work can transport us into a fictional, fantastic new world,
            describe a fleeting feeling, or simply give us a picture of the past
            through novels, poems, tragedies, epic works, and other genres.
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
