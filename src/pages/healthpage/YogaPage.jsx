import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Yoga from "../../components/health/healthsetcat/yoga/yoga";
import YogaBanner from "../../components/health/healthsetcat/yoga/yogabanner";
import YogaPopular from "../../components/health/healthsetcat/yoga/yogaPopular";
import YogaSidebar from "../../components/health/healthsetcat/yoga/yogasidebar";






export default function Yogapage() {
  return (
    <>
      <section className="container">
        <Yoga />
        <YogaBanner />
        <section className="tecbody">
          <YogaSidebar />
          <div className="allRightBar">
            <YogaPopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
