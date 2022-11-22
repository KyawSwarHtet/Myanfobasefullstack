import React from "react";
import "./sciencebody.css";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Science from "../../components/science/Science";

import ScienceMain from "../../components/science/ScienceMain";
import ScienceBanner from "../../components/science/ScienceBanner";
import SciencePopular from "../../components/science/SciencePopular";
import { Grid } from "@mui/material";
export default function SciencePage() {
  return (
    <>
      <div className="container">
        <Science />
        <ScienceBanner />
      </div>
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ScienceMain />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <SciencePopular />
            <Latestbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
