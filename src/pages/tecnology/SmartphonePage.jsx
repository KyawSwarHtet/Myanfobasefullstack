import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Subcatemain from "../../components/subcategory/Subcatemain";
import Smartphone from "../../components/technology/SubcateTechno/Smartphone";
import SmartphoneBanner from "../../components/technology/SubcateTechno/SmartphoneBanner";
import TechnologyPopular from "../../components/technology/TechnologyPopular";

export default function SmartphonePage() {
  return (
    <>
      <section className="container">
        <Smartphone />
        <SmartphoneBanner />
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
