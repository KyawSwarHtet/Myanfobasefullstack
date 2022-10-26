import React from "react";
import "./tecnologyPage.css";
import Footer from "../../components/footer/Footer";

import Computer from "../../components/subcategory/Computer";
import Subcategorybanner from "../../components/subcategory/Subcategorybanner";
import Subcatemain from "../../components/subcategory/Subcatemain";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import TechnologyPopular from "../../components/technology/TechnologyPopular";

export default function ComputerPage() {
  return (
    <>
      <section className="container">
        <Computer />
        <Subcategorybanner />
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
