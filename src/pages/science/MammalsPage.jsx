import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import SciencePopular from "../../components/science/SciencePopular";
import Mammals from "../../components/science/SubcateScience/Mammals";
import MammalsBanner from "../../components/science/SubcateScience/MammalsBanner";

export default function MammalsPage() {
  return (
    <>
      <section className="container">
        <Mammals />
        <MammalsBanner />
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
