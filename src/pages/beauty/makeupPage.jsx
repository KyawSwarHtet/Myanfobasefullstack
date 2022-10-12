import Makeup from "../../components/beauty/setcat/makeup";
import Makeupbanner from "../../components/beauty/setcat/Makeupbanner";
import MakeupRightbar from "../../components/beauty/setcat/Makeuprightbar";
import Makeupsidebar from "../../components/beauty/setcat/Makeupsidebar";
import Footer from "../../components/footer/Footer";

export default function Makeuppage() {
  return (
    <>
      <section className="container">
              <Makeup />
              <Makeupbanner />
        
        <section className="tecbody">
                  <Makeupsidebar />
                  <MakeupRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}