import React from "react";
import "./art.css";
import Artssbanner from "../../components/artss/Artssbanner";
import Artssheader from "../../components/artss/Artssheader";
import ArtssMain from "../../components/artss/ArtssMain";
import ArtssPopular from "../../components/artss/ArtssPopular";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import { Grid } from "@mui/material";
export default function Art() {
  return (
    <>
      <Artssheader />
      <section className="container">
        <Artssbanner />
      </section>

      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <ArtssMain />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <ArtssPopular />
            <Latestbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
