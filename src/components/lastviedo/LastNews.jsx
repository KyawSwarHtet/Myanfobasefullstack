import React from "react";
import "./lastnews.css";
import News from "./News";
import Todaylist from "./Todaylist";

const LastNews = () => {
  return (
    <section className="container LastNewSect">
      <h2>Lastest News</h2>
      <span className="headerline"></span>
      <div className="NewsSec">
        <div className="lastnew">
          <News />
          <Todaylist />
        </div>
      </div>
    </section>
  );
};

export default LastNews;
