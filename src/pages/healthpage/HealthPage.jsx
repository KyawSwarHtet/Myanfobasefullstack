import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import HealthBanner from "../../components/health/Healthbanner";
import HealthHeader from "../../components/health/Healthheader";
import HealthPopular from "../../components/health/Healthrightbar";
import HealthRightbar from "../../components/health/Healthrightbar";
import HealthSidebar from "../../components/health/Healthsidebar";





export default function Healthpage() {
  return (
    <>
      <section className="container">
        <HealthHeader />
        <HealthBanner />
        <section className="tecbody">
          <HealthSidebar />
          <div className="allRightBar">
                      <HealthPopular />
                      <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
