import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import SportMain from "../../components/sport/SportMain";
import SportPopular from "../../components/sport/SportPopular";
import Chessbanner from "../../components/sport/sportsetmenu/chess/Chessbanner";
import Chessheader from "../../components/sport/sportsetmenu/chess/Chessheader";

export default function Chesspage() {
  return (
    <>
      <section className="container">
        <Chessheader />
      </section>
      <Chessbanner />
      <section className="container">
        <div className="sportbody">
          <SportMain />
          <div className="allRightBar">
            <SportPopular />
            <Latestbar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
