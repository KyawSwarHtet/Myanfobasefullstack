import React from "react";
import Footer from "../../components/footer/Footer";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";
import Polbanner from "../../components/goverment/Police_Station/Polbanner";
import Polhead from "../../components/goverment/Police_Station/Polhead";

export default function Police() {
  return (
    <>
      <Polhead />
      <Polbanner />
      <section className="container travel1">
        <GoverLeft />
        <GoverRide />
      </section>
      <Footer />
    </>
  );
}
