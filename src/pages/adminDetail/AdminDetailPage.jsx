import React from "react";
import Footer from "../../components/footer/Footer";
import AdminDetail from "../../components/admin/AdminDetail";
import RequestForm from "../../components/admin/Requestform";

export default function AdmindetailPage() {
  return (
    <>
      <section className="container">
        <AdminDetail/>
      </section>
      <Footer />
    </>
  );
}
