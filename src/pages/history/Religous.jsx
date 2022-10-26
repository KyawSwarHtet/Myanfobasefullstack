import React from "react";
import Footer from "../../components/footer/Footer";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";
import Relibanner from "../../components/history/Religion/Relibanner";
import Relihead from "../../components/history/Religion/Relihead";

export default function Religous() {
  return (
    <>
      <Relihead />
      <Relibanner />
      <section className="container travel1">
        <HistSide />
        <HistRight />
      </section>
      <Footer />
    </>
  );
}
