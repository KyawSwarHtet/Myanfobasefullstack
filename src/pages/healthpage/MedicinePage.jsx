import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Medicine from "../../components/health/healthsetcat/Medicine/medicine";
import MedicineBanner from "../../components/health/healthsetcat/Medicine/medicinebanner";
import MedicinePopular from "../../components/health/healthsetcat/Medicine/medicinePopular";
import MedicineSidebar from "../../components/health/healthsetcat/Medicine/medicineSidebar";




export default function MedicinePage() {
  return (
    <>
      <section className="container">
        <Medicine />
        <MedicineBanner />
        <section className="tecbody">
          <MedicineSidebar />
          <div className="allRightBar">
            <MedicinePopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
