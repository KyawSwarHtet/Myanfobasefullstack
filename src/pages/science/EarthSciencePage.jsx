import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import SciencePopular from "../../components/science/SciencePopular";
import EarthScience from "../../components/science/SubcateScience/EarthScience";
import EarthScienceBanner from "../../components/science/SubcateScience/EarthScienceBanner";

export default function EarthSciencePage() {
  return (
    <>
      <section className="container">
        <EarthScience />
        <EarthScienceBanner />
        <section className="tecbody">
          <ScienceMain />
          <div className="allRightBar">
            <SciencePopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
