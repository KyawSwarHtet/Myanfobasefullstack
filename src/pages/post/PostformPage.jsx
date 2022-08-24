import React from "react";
import Footer from "../../components/footer/Footer";
import Postform from "../../components/post/Postform";
import "./postformpage.css";

export default function PostformPage() {
  return (
    <>
      <section className="postDiv ">
        <Postform />
      </section>
      <Footer />
    </>
  );
}
