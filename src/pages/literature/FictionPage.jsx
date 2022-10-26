import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import LiteratureMain from "../../components/literature/LiteratureMain";
import LiteraturePopular from "../../components/literature/LiteraturePopular";
import Fiction from "../../components/literature/SubcateLiterature/Fiction";
import FictionBanner from "../../components/literature/SubcateLiterature/FictionBanner";

export default function FictionPage() {
  return (
    <>
      <section className="container">
        <Fiction />
        <FictionBanner />
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
