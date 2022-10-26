import Salon from "../../components/beauty/setcat/salon";
import Salonbanner from "../../components/beauty/setcat/Salonbanner";
import SalonRightbar from "../../components/beauty/setcat/Salonrightbar";
import Salonsidebar from "../../components/beauty/setcat/Salonsidebar";
import Footer from "../../components/footer/Footer";

export default function SalonPage() {
  return (
    <>
      <section className="container">
        <Salon />
        <Salonbanner />

        <section className="tecbody">
          <Salonsidebar />
          <SalonRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
