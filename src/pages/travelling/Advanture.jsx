import React from "react";
import Footer from "../../components/footer/Footer";
import Advbanner from "../../components/travelling/Advanture-trip/Advbanner";
import Advheader from "../../components/travelling/Advanture-trip/Advheader";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";

export default function Advanture() {
  return (
    <div>
      <Advheader />
      <Advbanner />
      <section className="container travel1">
        <TravSidebar />
        <TravRbar />
      </section>
      <Footer />
    </div>
  );
}
