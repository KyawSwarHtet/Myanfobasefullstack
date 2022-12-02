import React from "react";
import Tbanner from "../../components/travelling/Tbanner";
import Theader from "../../components/travelling/Theader";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";
import "./travel.css";
import { Grid } from "@mui/material";
export default function Travel() {
  return (
    <>
      <Theader />
      <Tbanner />
      <section className="container">
        <Grid my={2} container sx={{ margin: "0px" }}>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <TravSidebar />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <TravRbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
