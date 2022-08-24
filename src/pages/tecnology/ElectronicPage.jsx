import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";

import Subcatemain from "../../components/subcategory/Subcatemain";
import Electronic from "../../components/technology/SubcateTechno/Electronic";
import ElectronicBanner from "../../components/technology/SubcateTechno/ElectronicBanner";
import TechnologyPopular from "../../components/technology/TechnologyPopular";

export default function ElectronicPage() {
  return (
    <>
      <section className="container">
        <Electronic />
        <ElectronicBanner />
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
