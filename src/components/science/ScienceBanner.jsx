import React from "react";
// import "../technology/technology.css";
import "../technology/technology.css";
import { Box, Typography, Grid, Container } from "@mui/material";

export default function ScienceBanner() {
  return (
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
                      civilization, the defining force of a new social order in
                      which efficiency is no longer an option but a necessity
                      imposed on all human activity.
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
                          <button className="cateLiterature">Literature</button>
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
                          <button className="cateLiterature">Literature</button>
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
    // <section className="photo">
    //   <div className="firstphoto">
    //     <div className="tech-firstphoto">
    //       <img
    //         className="fbphoto"
    //         src="./images/science/sciencebanner1.jpg"
    //         alt=""
    //       />
    //     </div>
    //     <div className="firstpara">
    //       <button className="cateScience">Science</button>
    //       <h4 className="sciencecolor">
    //         How to Mark yourself 'Safe' on Socials Media
    //       </h4>
    //       <p>
    //         Modern technology has become a total phenomenon for civilization,
    //         the defining force of a new social order in which efficiency is no
    //         longer an option but a necessity imposed on all human activity.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="secphoto">
    //     <div className="secrobot">
    //       <div className="tecsecdiv-firstphoto">
    //         <img
    //           className="robotphoto"
    //           src="./images/science/scienceinfo9.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div className="robotpara">
    //         <button className="cateScience">Science</button>
    //         <h4 className="sciencecolor">
    //           Corsair HS80 RGB Wireless Gaming Headset Review
    //         </h4>
    //       </div>
    //     </div>
    //     <div className="secair">
    //       <div className="tec-lastbannerphotos">
    //         <img
    //           className="airbudphoto"
    //           src="./images/science/sciencebanner11.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div className="airbudpara">
    //         <button className="cateScience">science</button>
    //         <h4 className="sciencecolor">
    //           Corsair HS80 RGB Wirless Gaming Headset Review
    //         </h4>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
