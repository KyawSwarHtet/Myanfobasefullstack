import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import HealthClinic from "../../components/health/healthsetcat/clinic/healthClinic";
import HealthClinicbanner from "../../components/health/healthsetcat/clinic/healthClinicBanner";
import HealthClinicPopular from "../../components/health/healthsetcat/clinic/healthClinicPopular";
import HealthClinicSidebar from "../../components/health/healthsetcat/clinic/healthlinicSidebar";






export default function HealthClinicPage() {
  return (
    <>
      <section className="container">
        <HealthClinic />
        <HealthClinicbanner />
        <section className="tecbody">
          <HealthClinicSidebar />
          <div className="allRightBar">
            <HealthClinicPopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
