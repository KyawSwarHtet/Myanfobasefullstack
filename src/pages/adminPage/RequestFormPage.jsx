import React from "react";
import RequestForm from "../../components/admin/Requestform";
import Footer from "../../components/footer/Footer";

export default function RequestFormPage() {
  return (
    <>
      <section className="container">
        <RequestForm />
      </section>
      <Footer />
    </>
  );
}
