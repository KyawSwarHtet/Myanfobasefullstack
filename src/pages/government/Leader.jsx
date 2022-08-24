import React from "react";
import Footer from "../../components/footer/Footer";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";
import Leadbanner from "../../components/goverment/Leader/Leadbanner";
import Leadhead from "../../components/goverment/Leader/Leadhead";

export default function Leader() {
  return (
    <>
      <Leadhead />
      <Leadbanner />
      <section className="container travel1">
        <GoverLeft />
        <GoverRide />
      </section>
      <Footer />
    </>
  );
}
