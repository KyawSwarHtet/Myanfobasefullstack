import React from "react";
import Footer from "../../components/footer/Footer";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";
import Lawbanner from "../../components/goverment/Law/Lawbanner";
import Lawhead from "../../components/goverment/Law/Lawhead";

export default function Law() {
  return (
    <>
      <Lawhead />
      <Lawbanner />
      <section className="container travel1">
        <GoverLeft />
        <GoverRide />
      </section>
      <Footer />
    </>
  );
}
