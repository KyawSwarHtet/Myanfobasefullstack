import React from "react";
import Footer from "../../components/footer/Footer";
import Histbanner from "../../components/history/Histbanner";
import Histhead from "../../components/history/Histhead";
import HistRight from "../../components/history/HistRight";
import HistSide from "../../components/history/HistSide";

const History = () => {
  return (
    <>
      <Histhead />
      <Histbanner />
      <section className="container travel1">
        <HistSide />
        <HistRight />
      </section>
      <Footer />
    </>
  );
};

export default History;
