import React from "react";
import Footer from "../../components/footer/Footer";
import Goverbanner from "../../components/goverment/Goverbanner";
import Goverhead from "../../components/goverment/Goverhead";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";

export default function Govenment() {
  return (
    <>
      <Goverhead />
      <Goverbanner />
      <section className="container travel1">
        <GoverLeft />
        <GoverRide />
      </section>
      <Footer />
    </>
  );
}
