import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "./lastnews.css";
import News from "./News";
import Todaylist from "./Todaylist";

const LastNews = () => {
  return (
    <section className="container LastNewSect">
      <h2>Lastest News</h2>
      <span className="headerline"></span>
      <div className="NewsSec">
        <Box>
          <div className="lastnew">
            <Container maxWidth="xl">
              <Grid container direction="row" spacing={12}>
                <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                  <News />
                </Grid>
              <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                  <Todaylist />
                </Grid>
              </Grid>
            </Container>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default LastNews;
