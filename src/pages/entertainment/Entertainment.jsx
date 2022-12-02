import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Entermentbanner from "../../components/enterment/Entermentbanner";
import Entermentheader from "../../components/enterment/Entermentheader";
import Entertainmentmain from "../../components/enterment/Entertainmentmain";
import Entertainmentpopular from "../../components/enterment/Entertainmentpopular";
import "../tecnology/tecnologyPage.css";
import { Grid } from "@mui/material";
export default function Entertainment() {
  return (
    <>
      <Entermentheader />
      <Entermentbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Entertainmentmain />
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
