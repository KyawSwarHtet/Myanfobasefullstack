import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Hfoods from "../../components/health/healthsetcat/healthyFood/Hfood";
import HfoodsBanner from "../../components/health/healthsetcat/healthyFood/Hfoodsbanner";
import Hfoodspopular from "../../components/health/healthsetcat/healthyFood/HfoodsPopular";
import HfoodsSidebar from "../../components/health/healthsetcat/healthyFood/HfoodsSidebar";




export default function Hfoodspage() {
  return (
    <>
      <section className="container">
        <Hfoods />
        <HfoodsBanner />
        <section className="tecbody">
          <HfoodsSidebar />
          <div className="allRightBar">
            <Hfoodspopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
