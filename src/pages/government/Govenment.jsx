import React from "react";
import Footer from "../../components/footer/Footer";
import Goverbanner from "../../components/goverment/Goverbanner";
import Goverhead from "../../components/goverment/Goverhead";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";
import "../travelling/travel.css";
import { Grid } from "@mui/material";
export default function Govenment() {
  return (
    <>
      <Goverhead />
      <Goverbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <GoverLeft />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <GoverRide />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
