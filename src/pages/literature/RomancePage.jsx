import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import LiteratureMain from "../../components/literature/LiteratureMain";
import LiteraturePopular from "../../components/literature/LiteraturePopular";
import Romance from "../../components/literature/SubcateLiterature/Romance";
import RomanceBanner from "../../components/literature/SubcateLiterature/RomanceBanner";

export default function RomancePage() {
  return (
    <>
      <section className="container">
        <Romance />
        <RomanceBanner />
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
