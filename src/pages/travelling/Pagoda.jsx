import React from "react";
import Footer from "../../components/footer/Footer";
import Pagobanner from "../../components/travelling/Pagoda/Pagobanner";
import Pagohead from "../../components/travelling/Pagoda/Pagohead";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";

export default function Pagoda() {
  return (
    <>
      <Pagohead />
      <Pagobanner />
      <section className="container travel1">
        <TravSidebar />
        <TravRbar />
      </section>
      <Footer />
    </>
  );
}
