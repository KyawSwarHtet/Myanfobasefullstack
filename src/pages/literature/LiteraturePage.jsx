import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Literature from "../../components/literature/Literature";
import LiteratureMain from "../../components/literature/LiteratureMain";
import LiteraturePopular from "../../components/literature/LiteraturePopular";

import "./literaturebody.css";

export default function LiteraturePage() {
  return (
    <>
      <section className="container">
        <Literature />
        <section className="literaturebody">
          <LiteratureMain />
          <div className="allRightBar">
            {/* <LiteraturePopular /> */}
            <PopularNews />
            <Latestbar />
          </div>
        </section>
      </section>
    </>
  );
}
