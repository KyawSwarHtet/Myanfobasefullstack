import React from "react";
import Aboutbanner from "../../components/aboutus/Aboutbanner";
import Aboutbody from "../../components/aboutus/Aboutbody";
import Aboutcontact from "../../components/aboutus/Aboutcontact";
import Abouthead from "../../components/aboutus/Abouthead";

export default function Aboutpage() {
  return (
    <>
      <Abouthead />

      <section className="container">
        <Aboutbanner />
        <Aboutbody />
        <Aboutcontact />
      </section>
    </>
  );
}
