import React from "react";
import Footer from "../../components/footer/Footer";
import Dynabanner from "../../components/history/Dynasty/Dynabanner";
import Dynahead from "../../components/history/Dynasty/Dynahead";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";

export default function Dynasty() {
  return (
    <>
      <Dynahead />
      <Dynabanner />
      <section className="container travel1">
        <HistSide />
        <HistRight />
      </section>
      <Footer />
    </>
  );
}
