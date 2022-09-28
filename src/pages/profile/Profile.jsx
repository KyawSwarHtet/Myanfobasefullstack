import React from "react";
import ProImg from "../../components/profile/ProImg";
import ProLeft from "../../components/profile/ProLeft";
import ProRight from "../../components/profile/ProRight";
import "./profile.css";
export default function Profile() {
  return (
    <>
      <ProImg />
      <section className="container Prosection">
        <ProLeft />
        <ProRight />
      </section>
    </>
  );
}
