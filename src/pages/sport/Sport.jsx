import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Sportbanner from "../../components/sport/Sportbanner";
import Sportheader from "../../components/sport/Sportheader";
import SportMain from "../../components/sport/SportMain";
import SportPopular from "../../components/sport/SportPopular";
import "./sport.css";
import { Grid } from "@mui/material";
export default function Sport() {
  return (
    <>
      <Sportheader />
      <Sportbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <SportMain />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <PopularNews />
            <Latestbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
