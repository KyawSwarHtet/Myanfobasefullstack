import React from "react";
// import "./gover.css";
import "../travelling/tbanner.css";
import { Grid } from "@mui/material";
const Goverbanner = () => {
  return (
    <section>
      <Grid my={4} container sx={{ margin: "0px" }}>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/government/gov1.jpg" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <h3>Daw Aung San Su Kyi</h3>
                <p>
                  One of the most beautiful beaches in Myanmar. Already stand as
                  a famous tourist attraction from Myanmar. Can easily fly by
                  domestic flights and seafoods are ...
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/government/gov3.jpg" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <h3>Superme Court</h3>
                <p>
                  Kyauk Kalap is located in the middle of a pretty artificial
                  lake and basically consists of a large piece of dramatic rock,
                  atop which is a scenic pagoda.
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/government/gov6.jpg" alt="" />
            </div>

            <div className="t-info">
              <div className="t-content">
                <h3>DR. Sar Sar</h3>
                <p>
                  Hkakabo Razi is believed to be Myanmar's highest mountain. The
                  5,881-meter (19,295 ft)-tall mountain is the highest mountain
                  in Southeast Asia as well.
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="../images/government/gov8.jpg" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <h3>ASEAN, #Reject Min Aung Hlaing</h3>
                <p>
                  Bagan is an ancient city and a UNESCO World Heritage Site in
                  the Mandalay Region of Myanmar From the 9th to 13th centuries,
                  the city was the capital of the Bagan Kingdom, the first
                  kingdom that unified the regions that would later constitute
                  Myanmar.
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Goverbanner;
