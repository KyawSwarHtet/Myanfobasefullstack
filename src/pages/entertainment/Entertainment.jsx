import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import Entermentbanner from "../../components/enterment/Entermentbanner";
import Entermentheader from "../../components/enterment/Entermentheader";
import Footer from "../../components/footer/Footer";
import TechnologyPopular from "../../components/technology/TechnologyPopular";

export default function Entertainment() {
  return (
    <>
      
        <Entermentheader />
      <Entermentbanner />
      <section className="container">
        <div className="tecbody">
          <Tecmain />
          <div className="allRightBar">
            <TechnologyPopular />
            <Latestbar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
