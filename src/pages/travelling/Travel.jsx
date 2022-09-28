import React from "react";
import Footer from "../../components/footer/Footer";
import Tbanner from "../../components/travelling/Tbanner";
import Theader from "../../components/travelling/Theader";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";
import "./travel.css";
export default function Travel() {
  return (
    <>
      <Theader />
      <Tbanner />
      <section className="container travel1">
        <TravSidebar />
        <TravRbar />
      </section>
      <Footer />
    </>
  );
}
