import React from "react";
import Univerbenner from "../../components/business/university/Univerbenner";
import Univerhead from "../../components/business/university/Univerhead";
import EduRight from "../../components/education/EduRight";
import EduSlide from "../../components/education/EduSlide";

const University = () => {
  return (
    <>
      <Univerhead />
      <Univerbenner />
      <section className="container travel1">
        <EduSlide />
        <EduRight />
      </section>
    </>
  );
};

export default University;
