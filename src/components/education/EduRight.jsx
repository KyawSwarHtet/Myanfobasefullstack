import React from "react";
import Advtecbar from "../catepagerightbar/Advtecbar";
import LatestArticle from "../catepagerightbar/LatestArticle";
import StaySocial from "../catepagerightbar/StaySocial";
import Subscribeform from "../catepagerightbar/Subscribeform";
import Edulast from "./Edulast";

export default function EduRight() {
  return (
    <div className="allrightbar">
      <Edulast />
      <span className="lastestbottomline "></span>
      <Advtecbar />
      <LatestArticle />
      <span className="lastestbottomline "></span>
      <StaySocial />
      <Subscribeform />
    </div>
  );
}
