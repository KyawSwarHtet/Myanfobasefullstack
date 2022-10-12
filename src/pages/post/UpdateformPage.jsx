import React from "react";
import Footer from "../../components/footer/Footer";
import EditPost from "../../components/post/Editpost";

import UpdateForm from "../../components/post/UpdateForm";
import "./postformpage.css";

export default function UpdateformPage() {
  return (
    <>
      <section>
        <EditPost />
        {/* <UpdateForm /> */}
      </section>
      <Footer />
    </>
  );
}
