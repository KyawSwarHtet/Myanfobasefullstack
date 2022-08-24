import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Infodoctor from "../../components/health/healthsetcat/infoDoctor/infodoctor";
import InfodoctorBanner from "../../components/health/healthsetcat/infoDoctor/infodoctorbanner";
import InfodoctorPopular from "../../components/health/healthsetcat/infoDoctor/infodoctorPopular";
import InfodoctorSiderbar from "../../components/health/healthsetcat/infoDoctor/infodoctorsiderbar";





export default function InfodoctorPage() {
  return (
    <>
      <section className="container">
        <Infodoctor />
        <InfodoctorBanner />
        <section className="tecbody">
          <InfodoctorSiderbar />
          <div className="allRightBar">
            <InfodoctorPopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
