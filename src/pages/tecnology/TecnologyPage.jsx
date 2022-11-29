import Latestbar from "../../components/catepagerightbar/Latestbar";
import Technology from "../../components/technology/Technology";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import "./tecnologyPage.css";
import { Grid } from "@mui/material";

import PopularNews from "../../components/catepagerightbar/PopularNews";
export default function TecnologyPages() {
  return (
    <>
      <Technology />
      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <Tecmain />
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
