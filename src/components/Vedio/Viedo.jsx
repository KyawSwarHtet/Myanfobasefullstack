import React from "react";
import "./vedio.css";
import Vedionew from "./Vedionew";
import ViedoNav from "./ViedoNav";
const Viedosec = () => {
  return (
    <section className="container video-container">
      <ViedoNav />
      <Vedionew />
    </section>
  );
};

export default Viedosec;
