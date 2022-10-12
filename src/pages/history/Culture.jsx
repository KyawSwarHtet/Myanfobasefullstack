import React from "react";
import Footer from "../../components/footer/Footer";
import Culbanner from "../../components/history/Culture/Culbanner";
import Culhead from "../../components/history/Culture/Culhead";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";

export default function Culture() {
  return (
    <>
      <Culhead />
      <Culbanner />
      <section className="container travel1">
        <HistSide />
        <HistRight />
      </section>
      <Footer />
    </>
  );
}
