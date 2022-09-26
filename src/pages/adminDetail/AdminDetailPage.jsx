import React from "react";
import Admin from "../../components/admin/Requestform";
import AdminDetail from "../../components/admin/AdminDetail";
import Footer from "../../components/footer/Footer";

export default function AdmindetailPage() {
  return (
    <>
          <section className="container">
              <AdminDetail />
      </section>
      <Footer />
    </>
  );
}
