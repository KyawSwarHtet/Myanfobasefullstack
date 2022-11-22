import Latestbar from "../../components/catepagerightbar/Latestbar";
import Technology from "../../components/technology/Technology";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import "./tecnologyPage.css";

import TechnologyPopular from "../../components/technology/TechnologyPopular";
import PopularNews from "../../components/catepagerightbar/PopularNews";
export default function TecnologyPages() {
  return (
    <>
      <section className="container">
        <Technology />
        <section className="tecbody">
          <Tecmain />
          <div className="allRightBar">
            {/* <TechnologyPopular /> */}
            <PopularNews />
            <Latestbar />
          </div>
        </section>
      </section>
    </>
  );
}
