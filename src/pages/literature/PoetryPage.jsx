import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import LiteratureMain from "../../components/literature/LiteratureMain";
import LiteraturePopular from "../../components/literature/LiteraturePopular";
import Poetry from "../../components/literature/SubcateLiterature/Poetry";
import PoetryBanner from "../../components/literature/SubcateLiterature/PoetryBanner";

export default function PoetryPage() {
  return (
    <>
      <section className="container">
        <Poetry />
        <PoetryBanner />
        <section className="tecbody">
          <LiteratureMain />
          <div className="allRightBar">
            <LiteraturePopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
