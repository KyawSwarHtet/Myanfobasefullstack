import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import SciencePopular from "../../components/science/SciencePopular";
import Astronomy from "../../components/science/SubcateScience/Astronomy";
import AstronomyBanner from "../../components/science/SubcateScience/AstronomyBanner";

export default function AstronomyPage() {
  return (
    <>
      <section className="container">
        <Astronomy />
        <AstronomyBanner />
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
