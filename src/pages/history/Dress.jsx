import React from "react";
import Footer from "../../components/footer/Footer";
import Dressbanner from "../../components/history/Dress-code/Dressbanner";
import Dresshead from "../../components/history/Dress-code/Dresshead";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";

export default function Dress() {
  return (
    <>
      <Dresshead />
      <Dressbanner />
      <section className="container travel1">
        <HistSide />
        <HistRight />
      </section>
      <Footer />
    </>
  );
}
