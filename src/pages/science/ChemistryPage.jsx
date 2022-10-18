import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import SciencePopular from "../../components/science/SciencePopular";
import Chemistry from "../../components/science/SubcateScience/Chemistry";
import ChemistryBanner from "../../components/science/SubcateScience/ChemistryBanner";

export default function ChemistryPage() {
  return (
    <>
      <section className="container">
        <Chemistry />
        <ChemistryBanner />
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
