import React from "react";
import "./lifestyle.css";
import Lifestyleheader from "../../components/lifestyle/Lifestyleheader";
import Lifestylebanner from "../../components/lifestyle/Lifestylebanner";
import Footer from "../../components/footer/Footer";
import Lifestylesidebar from "../../components/lifestyle/Lifestylesidebar";
import LifestyPopular from "../../components/lifestyle/Lifestylerightbar";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";

export default function Lifestyle() {
  return (
    <>
      <section className="container">
        <Lifestyleheader />
        <Lifestylebanner />
        <section className="tecbody">
          <Lifestylesidebar />
          <div className="allRightBar">
            {/* <LifestyPopular /> */}
            <PopularNews />
            <Latestbar />
          </div>
        </section>
      </section>
    </>
  );
}
