import React from "react";
import Footer from "../../components/footer/Footer";
import GoverLeft from "../../components/goverment/GoverLeft";
import GoverRide from "../../components/goverment/GoverRide";
import Minbanner from "../../components/goverment/Ministry/Minbanner";
import Minhead from "../../components/goverment/Ministry/Minhead";

const Ministry = () => {
  return (
    <>
      <Minhead />
      <Minbanner />
      <section className="container travel1">
        <GoverLeft />
        <GoverRide />
      </section>
      <Footer />
    </>
  );
};

export default Ministry;
