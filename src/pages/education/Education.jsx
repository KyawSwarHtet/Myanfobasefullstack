import React from "react";
import Edubanner from "../../components/education/Edubanner";
import Eduhead from "../../components/education/Eduhead";
import EduRight from "../../components/education/EduRight";
import EduSlide from "../../components/education/EduSlide";

export default function Education() {
  return (
    <>
      <Eduhead />
      <Edubanner />
      <section className="container travel1">
        <EduSlide />
        <EduRight />
      </section>
    
    </>
  );
}
