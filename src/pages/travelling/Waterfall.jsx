import React from "react";
import Footer from "../../components/footer/Footer";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";
import Waterbanner from "../../components/travelling/Waterfall/Waterbanner";
import Waterhead from "../../components/travelling/Waterfall/Waterhead";

export default function Waterfall() {
  return (
    <div>
      <Waterhead />
      <Waterbanner />
      <section className="container travel1">
        <TravSidebar />
        <TravRbar />
      </section>
      <Footer />
    </div>
  );
}
