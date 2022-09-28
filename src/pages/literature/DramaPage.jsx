import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import LiteratureMain from "../../components/literature/LiteratureMain";
import LiteraturePopular from "../../components/literature/LiteraturePopular";
import Drama from "../../components/literature/SubcateLiterature/Drama";
import DramaBanner from "../../components/literature/SubcateLiterature/DramaBanner";

export default function DramaPage() {
  return (
    <>
      <section className="container">
        <Drama />
        <DramaBanner />
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
