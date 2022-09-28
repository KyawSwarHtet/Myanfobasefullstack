import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Subcatemain from "../../components/subcategory/Subcatemain";
import Software from "../../components/technology/SubcateTechno/Software";
import SoftwareBanner from "../../components/technology/SubcateTechno/SoftwareBanner";
import TechnologyPopular from "../../components/technology/TechnologyPopular";

export default function SoftwarePage() {
  return (
    <>
      <section className="container">
        <Software />
        <SoftwareBanner />
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
