import React from "react";
import Footer from "../../components/footer/Footer";
import Histbanner from "../../components/history/Histbanner";
import Histhead from "../../components/history/Histhead";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";
import "../travelling/travel.css";
import { Grid } from "@mui/material";
const History = () => {
  return (
    <>
      <Histhead />
      <Histbanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <HistSide />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <HistRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default History;
