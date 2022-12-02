import React from "react";
import "./footer.css";
import { Grid, Box, Container, Link } from "@mui/material";

export default function Footer() {
  return (
    <>
      <section>
        <footer className="FooterColor">
          {/* <div className="FooterDiv"> */}
          <Box>
            <Container maxWidth="xl">
              <Grid container spacing={5} paddingLeft={8}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box>
                    <div className="footertitle">
                      <div className="spiderImg">
                        <img src="./images/homeimgs/logo2.png" alt="" />
                      </div>
                    </div>
                  </Box>
                  <Box p={1}>
                    <h4>Address and Contact</h4>
                  </Box>
                  <Box p={1}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <i class="uil uil-home"></i>
                      </Grid>
                      <Grid item>NO(10). Maharbowga street Yangon</Grid>
                    </Grid>
                  </Box>
                  <Box p={1}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <i class="uil uil-envelope-star"></i>
                      </Grid>
                      <Grid item>
                        <a href="mailto:myanfobase@gmail.com">
                          myanfobase@gmail.com
                        </a>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={1}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <i class="uil uil-phone-volume"></i>
                      </Grid>
                      <Grid item>
                        <a href="tele:0925252525">0933434334</a>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={1}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <i class="uil uil-envelope-open"></i>
                      </Grid>
                      <Grid item>
                        <input
                          className="inputfooter"
                          type="text"
                          placeholder="Enter your email"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Box p={0.5}>
                    <h4>Category</h4>
                  </Box>
                  <Box p={0.5}>
                    <Link to="/entertainment" color="white" underline="hover">
                      entertainment
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link to="/business" color="white" underline="hover">
                      business
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link to="/fashion" color="white" underline="hover">
                      fashion
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link to="/food" color="white" underline="hover">
                      food
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link to="/health" color="white" underline="hover">
                      health
                    </Link>
                  </Box>
                  <Box p={0.5}>
                    <Link to="/lifestyle" color="white" underline="hover">
                      lifestyle
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box p={0.5}>
                    <h4>About</h4>
                  </Box>
                  <Box p={0.5}>
                    <Link to="/aboutus" color="white" underline="hover">
                      About Us
                    </Link>
                  </Box>
                  <Box p={0.5}>Carrers</Box>
                  <Box p={0.5}>Where to Buy</Box>
                  <Box p={0.5}>investor Relation</Box>
                  <Box p={0.5}>Student Discount</Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box p={0.5}>
                    <h4>Social & Payment</h4>
                  </Box>
                  <Box p={0.5}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <i class="uil uil-facebook-f"></i>
                      </Grid>
                      <Grid item>
                        <span>Facebook</span>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={0.5}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <i class="uil uil-instagram"></i>
                      </Grid>
                      <Grid item>
                        <span>Instagram</span>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={0.5}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <i class="uil uil-twitter-alt"></i>
                      </Grid>
                      <Grid item>
                        <span>Twitter</span>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={0.5}>
                    <Grid container direction="row" spacing={0.5}>
                      <Grid item>
                        <i class="uil uil-youtube"></i>
                      </Grid>
                      <Grid item>
                        <span>Youtube</span>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box p={0.5}>Student Discount</Box>
                  <div>
                    <ul className="fotpayment">
                      <li>
                        <img src="./images/homeimgs/kpay.png" alt="" />
                      </li>
                      <li>
                        <img src="./images/homeimgs/wavemoney.jpg" alt="" />
                      </li>
                      <li>
                        <img src="./images/homeimgs/CBPay.png" alt="" />
                      </li>
                      <li>
                        <img src="./images/homeimgs/ayapay.jpg" alt="" />
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
       
          <span className="footerunderline"></span>
          <p className="copyright">
            &copy; Copyright 2022. <span> SGcamp (3) Webdevelopment Team</span>
          </p>
          {/* </div> */}
        </footer>
      </section>
    </>
  );
}
