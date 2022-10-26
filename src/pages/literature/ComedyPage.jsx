import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import LiteratureMain from "../../components/literature/LiteratureMain";
import LiteraturePopular from "../../components/literature/LiteraturePopular";
import Comedy from "../../components/literature/SubcateLiterature/Comedy";
import ComedyBanner from "../../components/literature/SubcateLiterature/ComedyBanner";

export default function ComedyPage() {
  return (
    <>
      <section className="container">
        <Comedy />
        <ComedyBanner />
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
