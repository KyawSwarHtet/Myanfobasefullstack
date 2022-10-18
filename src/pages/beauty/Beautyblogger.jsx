import React from "react";
import "./beauty.css";
import Blogger from "../../components/beauty/setcat/blogger";
import Bloggerbanner from "../../components/beauty/setcat/Bloggerbanner";
import Bloggersidebar from "../../components/beauty/setcat/Bloggersidebar";
import Footer from "../../components/footer/Footer";
import BloggerRightbar from "../../components/beauty/setcat/Bloggerrightbar";

export default function Beautyblogger() {
  return (
    <>
      <section className="container">
        <Blogger />
        <Bloggerbanner />
        <section className="tecbody">
          <Bloggersidebar />
          <BloggerRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
