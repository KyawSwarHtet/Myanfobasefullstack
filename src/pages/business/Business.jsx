import React from "react";
import "./business.css";
import Businbenner from "../../components/business/Businbenner";
import Businhead from "../../components/business/Businhead";
import BusinMain from "../../components/business/BusinMain";
import BusinRight from "../../components/business/BusinRight";

export default function Business() {
  return (
    <>
      <Businhead />

      <Businbenner />
      <section className="container">
        <div className="businbody">
          <BusinMain />
          <BusinRight />
        </div>
      </section>
    </>
  );
}
