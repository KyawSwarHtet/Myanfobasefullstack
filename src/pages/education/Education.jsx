import React from "react";
import Edubanner from "../../components/education/Edubanner";
import Eduhead from "../../components/education/Eduhead";
import EduRight from "../../components/education/EduRight";
import EduSlide from "../../components/education/EduSlide";
import "../travelling/travel.css";
import { Grid } from "@mui/material";
export default function Education() {
  return (
    <>
      <Eduhead />
      <Edubanner />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <EduSlide />
          </Grid>
          <Grid item xs={12} xl={3.6} md={3.6}>
            <EduRight />
          </Grid>
        </Grid>
      </section>
    </>
  );
}
