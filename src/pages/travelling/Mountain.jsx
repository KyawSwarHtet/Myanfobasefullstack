import React from "react";
import Footer from "../../components/footer/Footer";
import Moubanner from "../../components/travelling/Mountain/Moubanner";
import Mouhead from "../../components/travelling/Mountain/Mouhead";
import TravRbar from "../../components/travelling/TravRbar";
import TravSidebar from "../../components/travelling/TravSidebar";

export default function Mountain() {
  return (
    <div>
      <Mouhead />
      <Moubanner />
      <section className="container travel1">
        <TravSidebar />
        <TravRbar />
      </section>
      <Footer />
    </div>
  );
}
