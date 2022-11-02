import Latestbar from "../../components/catepagerightbar/Latestbar";
import Technology from "../../components/technology/Technology";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import "./tecnologyPage.css";

import TechnologyPopular from "../../components/technology/TechnologyPopular";
export default function TecnologyPages() {
  return (
    <>
      <section className="container">
        <Technology />
        <section className="tecbody">
          <Tecmain />
          <div className="allRightBar">
            <TechnologyPopular />
            <Latestbar />
          </div>
        </section>
      </section>
    </>
  );
}
