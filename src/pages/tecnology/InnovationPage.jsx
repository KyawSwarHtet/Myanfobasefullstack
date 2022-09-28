import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Subcatemain from "../../components/subcategory/Subcatemain";
import Innovation from "../../components/technology/SubcateTechno/Innovation";
import InnovationBanner from "../../components/technology/SubcateTechno/InnovationBanner";
import TechnologyPopular from "../../components/technology/TechnologyPopular";

export default function InnovationPage() {
  return (
    <>
      <section className="container">
        <Innovation />
        <InnovationBanner />
        <section className="tecbody">
          <Subcatemain />
          <div className="allRightBar">
            <TechnologyPopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
