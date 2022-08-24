import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Family from "../../components/lifestyle/lifestyleSetmenu/family/family";
import FamilyBanner from "../../components/lifestyle/lifestyleSetmenu/family/familyBanner";
import FamilyPopular from "../../components/lifestyle/lifestyleSetmenu/family/familyPopular";
import FamilySidebar from "../../components/lifestyle/lifestyleSetmenu/family/familySidebar";




export default function FamilyPage() {
  return (
    <>
      <section className="container">
        <Family />
        <FamilyBanner />
        <section className="tecbody">
          <FamilySidebar />
          <div className="allRightBar">
            <FamilyPopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
