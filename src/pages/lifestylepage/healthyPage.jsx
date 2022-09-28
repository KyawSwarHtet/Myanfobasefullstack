import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import HealthyLife from "../../components/lifestyle/lifestyleSetmenu/healthyLife/healthy";
import HealthyLifeBanner from "../../components/lifestyle/lifestyleSetmenu/healthyLife/healthyBanner";
import HealthyLifePopular from "../../components/lifestyle/lifestyleSetmenu/healthyLife/healthyPopular";
import HealthyLifeSidebar from "../../components/lifestyle/lifestyleSetmenu/healthyLife/healthySidebar";



export default function HealthyLifePage() {
  return (
    <>
      <section className="container">
        <HealthyLife />
        <HealthyLifeBanner />
        <section className="tecbody">
          <HealthyLifeSidebar />
          <div className="allRightBar">
            <HealthyLifePopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
