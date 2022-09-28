import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import LiteratureMain from "../../components/literature/LiteratureMain";
import LiteraturePopular from "../../components/literature/LiteraturePopular";
import Shortstory from "../../components/literature/SubcateLiterature/Shortstory";
import ShortstoryBanner from "../../components/literature/SubcateLiterature/ShortstoryBanner";

export default function ShortstoryPage() {
  return (
    <>
      <section className="container">
        <Shortstory />
        <ShortstoryBanner />
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
