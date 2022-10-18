import React from "react";
import "./business.css";
import Businbenner from "../../components/business/Businbenner";
import Businhead from "../../components/business/Businhead";
import BusinMain from "../../components/business/BusinMain";
import BusinPopular from "../../components/business/BusinPopular";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";

export default function Business() {
  return (
    <>
      <Businhead />

      <Businbenner />
      <section className="container">
        <div className="businbody">
          <BusinMain />
          <section className="container">
            <BusinPopular />
            <Latestbar />
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
