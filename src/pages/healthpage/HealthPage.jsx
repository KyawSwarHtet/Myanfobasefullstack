import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Footer from "../../components/footer/Footer";
import HealthBanner from "../../components/health/Healthbanner";
import HealthHeader from "../../components/health/Healthheader";
import HealthRightbar from "../../components/health/Healthrightbar";
import HealthSidebar from "../../components/health/Healthsidebar";
import "../tecnology/tecnologyPage.css";
import "./health.css";
import { Grid } from "@mui/material";
export default function Healthpage() {
  return (
    <>
      <HealthHeader />
      <HealthBanner />

      <section className="container">
        <Grid my={2} container>
          <Grid item xs={12} xl={8.4} md={8.4}>
            <HealthSidebar />
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
