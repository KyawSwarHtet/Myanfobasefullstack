import Skinbanner from "../../components/beauty/setcat/Skinbanner";
import Skincare from "../../components/beauty/setcat/skincare";
import SkinRightbar from "../../components/beauty/setcat/Skinrightbar";
import Skinsidebar from "../../components/beauty/setcat/Skinsidebar";

export default function Skinpage() {
  return (
    <>
      <section className="container">
        <Skincare />
        <Skinbanner />

        <section className="tecbody">
          <Skinsidebar />
          <SkinRightbar />
        </section>
      </section>
    </>
  );
}
