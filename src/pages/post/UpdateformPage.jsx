import React from "react";
import Footer from "../../components/footer/Footer";
import UpdateForm from "../../components/post/UpdateForm";
import "./postformpage.css";

export default function UpdateformPage() {
  return (
    <>
      <section>
        <UpdateForm />
      </section>
      <Footer />
    </>
  );
}
