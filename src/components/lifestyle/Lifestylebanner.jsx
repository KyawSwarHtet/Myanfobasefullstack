import React from "react";
import "./lifestylebanner.css";
import "animate.css";
import { Grid } from "@mui/material";
export default function Lifestylebanner() {
  return (
    <section className="container ">
      <Grid my={4} container sx={{ margin: "0px" }}>
        <Grid xs={6} sm={4} md={3}>
          <div className="lifebanner-img">
            <img src="../images/homeimgs/lifestyleban1.jpg" alt="" />
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={3}>
          <div className="lifebanner-img">
            <img src="../images/homeimgs/lifestyleban2.jpg" alt="" />
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={3}>
          <div className="lifebanner-img lifebanner-img1">
            <img src="../images/homeimgs/lifestyleban3.jpg" alt="" />
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={3}>
          <div className="lifebanner-img lifebanner-img2">
            <img src="../images/homeimgs/lifestyleban4.jpg" alt="" />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
