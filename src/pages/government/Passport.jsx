import React from "react";
import Footer from "../../components/footer/Footer";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";
import Passbanner from "../../components/goverment/Passport/Passbanner";
import Passhead from "../../components/goverment/Passport/Passhead";

export default function Passport() {
  return (
    <>
      <Passhead />
      <Passbanner />
      <section className="container travel1">
        <GoverLeft />
        <GoverRide />
      </section>
      <Footer />
    </>
  );
}
