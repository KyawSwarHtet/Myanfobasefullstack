import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Luxury from "../../components/lifestyle/lifestyleSetmenu/luxury/luxury";
import LuxuryBanner from "../../components/lifestyle/lifestyleSetmenu/luxury/luxuryBanner";
import LuxuryPopular from "../../components/lifestyle/lifestyleSetmenu/luxury/luxurypopular";
import LuxurySidebar from "../../components/lifestyle/lifestyleSetmenu/luxury/luxurySidebar";



export default function LuxuryPage() {
  return (
    <>
      <section className="container">
        <Luxury />
        <LuxuryBanner />
        <section className="tecbody">
          <LuxurySidebar />
          <div className="allRightBar">
            <LuxuryPopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

