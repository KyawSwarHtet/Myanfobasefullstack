import React from "react";
import Advtecbar from "../catepagerightbar/Advtecbar";
import LatestArticle from "../catepagerightbar/LatestArticle";
import PopularNews from "../catepagerightbar/PopularNews";
import StaySocial from "../catepagerightbar/StaySocial";
import Subscribeform from "../catepagerightbar/Subscribeform";
import GoverLast from "./GoverLast";

export default function GoverRide() {
  return (
    <>
      <div className="allrightbar">
        {/* <GoverLast /> */}
        <PopularNews />
        <span className="lastestbottomline "></span>
        <Advtecbar />
        <LatestArticle />
        <span className="lastestbottomline "></span>
        <StaySocial />
        <Subscribeform />
      </div>
    </>
  );
}
