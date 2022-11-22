import React from "react";
import "./lifestyle.css";
import Lifestyleheader from "../../components/lifestyle/Lifestyleheader";
import Lifestylebanner from "../../components/lifestyle/Lifestylebanner";
import Footer from "../../components/footer/Footer";
import Lifestylesidebar from "../../components/lifestyle/Lifestylesidebar";
import LifestyPopular from "../../components/lifestyle/Lifestylerightbar";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import { Grid } from "@mui/material";
export default function Lifestyle() {
  return (
    <>
      <Lifestyleheader />
      <Lifestylebanner />

      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Lifestylesidebar />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <LifestyPopular />
            <Latestbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
