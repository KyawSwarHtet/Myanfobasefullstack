import { Grid } from "@mui/material";
import React from "react";
import "./artssbanner.css";

export default function Artssbanner() {
  return (
    <>
      <Grid my={2} container sx={{ margin: "0px" }}>
        <Grid item xs={12} sm={6} md={6}>
          <div className="artphoto">
            <img src="./images/art/Abstractart-3.jpg" alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div className="artpara">
            <h1>Chagall, Master Drawings</h1>
            <div className="datepara">
              <p>
                FEBRUARY 27-MAY 28, 2018 <br />
                On view at The Met First Avenue <br />
                in Gallery 209
              </p>
            </div>

            <div className="companypara">
              <p>
                Accompained by a catalogue and <br />
                an Audio Guide
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
