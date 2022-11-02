import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Entermentbanner from "../../components/enterment/Entermentbanner";
import Entermentheader from "../../components/enterment/Entermentheader";
import Entertainmentmain from "../../components/enterment/Entertainmentmain";
import Entertainmentpopular from "../../components/enterment/Entertainmentpopular";

export default function Entertainment() {
  return (
    <>
      <Entermentheader />
      <Entermentbanner />
      <section className="container">
        <div className="tecbody">
          <Entertainmentmain />
          <div className="allRightBar">
            <Entertainmentpopular />
            <Latestbar />
          </div>
        </div>
      </section>
    </>
  );
}
