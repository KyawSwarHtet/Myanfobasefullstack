import React from "react";
import "./tbanner.css";
import { Grid } from "@mui/material";
export default function Tbanner() {
  return (
    <section>
      <Grid my={4} container sx={{ margin: "0px" }}>
        <Grid item xs={6} sm={6} md={3}>
          <div className="ban-travel">
            <div className="t_imagediv">
              <img src="./images/travel/ngapali.jpg" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <h3>Nagapli Beach</h3>
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
              <img src="./images/travel/Hpa-an.png" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <h3>Kyauk Kalap</h3>
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
              <img src="./images/travel/hkakabrorazi.png" alt="" />
            </div>

            <div className="t-info">
              <div className="t-content">
                <h3>Hkakabo Razi Ice-Mountain</h3>
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
              <img src="./images/travel/bangan.jpg" alt="" />
            </div>
            <div className="t-info">
              <div className="t-content">
                <h3>Bagan</h3>
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
}
