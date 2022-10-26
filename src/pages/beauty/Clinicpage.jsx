import BeautyClinic from "../../components/beauty/setcat/clinic";
import Clinic from "../../components/beauty/setcat/clinic";
import BeautyClinicBanner from "../../components/beauty/setcat/Clinicbanner";
import ClinicBanner from "../../components/beauty/setcat/Clinicbanner";
import BeautyClinicRightbar from "../../components/beauty/setcat/Clinicrightbar";
import ClinicRightbar from "../../components/beauty/setcat/Clinicrightbar";
import BeautyClinicsidebar from "../../components/beauty/setcat/Clinicsidebar";
import Clinicsidebar from "../../components/beauty/setcat/Clinicsidebar";
import Footer from "../../components/footer/Footer";




export default function BeautyClinicpage() {
  return (
    <>
      <section className="container">
              <BeautyClinic />
              <BeautyClinicBanner />
              <section className="tecbody">
                  <BeautyClinicsidebar />
          <BeautyClinicRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}