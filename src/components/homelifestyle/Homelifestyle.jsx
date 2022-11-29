import { Box, Container, Grid } from "@mui/material";
import "./homelifestyle.css";
import Lifestylenew from "./Lifestylenew";
import SponserContent from "./SponserContent";

export default function Homelifestyle() {
  return (
    <section className="container LifestyleSect">
      <h2>Lifestyle News</h2>
      <span className="Lifeline"></span>
      <Box>
        <div id="lifestyles-New">
          <Container maxWidth="xl">
            <Grid container direction="row" spacing={15}>
              <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                <Lifestylenew />
              </Grid>
              <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                <SponserContent />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Box>
    </section>
  );
}
