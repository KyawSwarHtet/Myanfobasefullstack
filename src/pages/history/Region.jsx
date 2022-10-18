import React from "react";
import Footer from "../../components/footer/Footer";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";
import Regionbanner from "../../components/history/Region/Regionbanner";
import Regionhead from "../../components/history/Region/Regionhead";

export default function Region() {
  return (
    <>
      <Regionhead />
      <Regionbanner />
      <section className="container travel1">
        <HistSide />
        <HistRight />
      </section>
      <Footer />
    </>
  );
}
