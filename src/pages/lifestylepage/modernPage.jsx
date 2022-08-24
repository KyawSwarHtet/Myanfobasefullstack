import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Modern from "../../components/lifestyle/lifestyleSetmenu/modern/modern";
import ModernBanner from "../../components/lifestyle/lifestyleSetmenu/modern/modernBanner";
import ModernPopular from "../../components/lifestyle/lifestyleSetmenu/modern/modernpopular";
import ModernSidebar from "../../components/lifestyle/lifestyleSetmenu/modern/modernSidebar";




export default function ModernPage() {
  return (
    <>
      <section className="container">
        <Modern />
        <ModernBanner />
        <section className="tecbody">
          <ModernSidebar />
          <div className="allRightBar">
            <ModernPopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
