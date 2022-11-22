import React from "react";
import "./beauty.css";
import BeautyRighrbar from "../../components/beauty/Bearightbar";
import Beautybanner from "../../components/beauty/Beautybanner";
import Beautyheader from "../../components/beauty/Beautyheader";
import BeautySidebar from "../../components/beauty/Beautysidebar";
import { Grid } from "@mui/material";
export default function Beauty({ getAllusers, getAllposts }) {
  return (
    <>
      <Beautyheader />
      <Beautybanner />

      {/* <section className="tecbody">
          <BeautySidebar />

          <BeautyRighrbar />
        </section> */}

      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <BeautySidebar />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <BeautyRighrbar />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
