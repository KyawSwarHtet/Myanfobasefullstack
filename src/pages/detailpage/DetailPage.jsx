import React from "react";
import { useParams } from "react-router-dom";
import Latestbar from "../../components/catepagerightbar/Latestbar";

import Detailbanner from "../../components/detailpagecompo/Detailbanner";
import Detailhead from "../../components/detailpagecompo/Detailhead";
import Latestdetail from "../../components/detailpagecompo/Latestdetail";
import Latestpho from "../../components/detailpagecompo/Latestpho";
import RelatedA from "../../components/detailpagecompo/RelatedA";
import DetailMustRead from "../../components/detailpagecompo/DetailMustRead";
import Footer from "../../components/footer/Footer";

import "./detailpage.css";

export default function DetailPage() {
  const detailid = useParams();
  console.log("detalid is ", detailid);

  return (
    <>
      <Detailhead />
      <section className="container detailbody">
        <Detailbanner detailid={detailid} />

        <div className="allRightBar detailcontainer">
          <RelatedA />
          <Latestpho />
          <Latestdetail />
        </div>
      </section>
      <div className="container">
        <DetailMustRead />
      </div>
      <Footer />
    </>
  );
}
