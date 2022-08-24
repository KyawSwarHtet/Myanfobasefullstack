import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import LiteratureMain from "../../components/literature/LiteratureMain";
import LiteraturePopular from "../../components/literature/LiteraturePopular";
import Novel from "../../components/literature/SubcateLiterature/Novel";
import NovelBanner from "../../components/literature/SubcateLiterature/NovelBanner";

export default function NovelPage() {
  return (
    <>
      <section className="container">
        <Novel />
        <NovelBanner />
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
