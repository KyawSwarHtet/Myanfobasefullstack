import React from "react";
import Footer from "../../components/footer/Footer";
import Beabanner from "../../components/travelling/Beach/Beabanner";
import Beahead from "../../components/travelling/Beach/Beahead";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";

export default function Beach() {
  return (
    <>
      <Beahead />
      <Beabanner />
      <section className="container travel1">
        <TravSidebar />
        <TravRbar />
      </section>
      <Footer />
    </>
  );
}
