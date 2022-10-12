import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import SciencePopular from "../../components/science/SciencePopular";
import Physics from "../../components/science/SubcateScience/Physics";
import PhysicsBanner from "../../components/science/SubcateScience/PhysicsBanner";

export default function PhysicsPage() {
  return (
    <>
      <section className="container">
        <Physics />
        <PhysicsBanner />
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
