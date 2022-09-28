import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import SciencePopular from "../../components/science/SciencePopular";
import Plants from "../../components/science/SubcateScience/Plants";
import PlantsBanner from "../../components/science/SubcateScience/PlantsBanner";

export default function PlantsPage() {
  return (
    <>
      <section className="container">
        <Plants />
        <PlantsBanner />
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
