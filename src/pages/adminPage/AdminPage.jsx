import React from "react";
import AdminChue from "../../components/admin/adminchue";
import Admin from "../../components/admin/AdminView";
import Footer from "../../components/footer/Footer";

export default function AdminPage() {
  return (
    <>
      <section className="container">
        <AdminChue/>
      </section>
      <Footer/>
    </>
  )
}