import Categorieslider from "../../components/categories/Categorieslider";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeEducation from "../../components/homeeducation/homeEducation";
import HomeHeader from "../../components/homeheadercompo/Homeheader";
import Homelifestyle from "../../components/homelifestyle/Homelifestyle";
import LastNews from "../../components/lastviedo/LastNews";
import Viedo from "../../components/Vedio/Viedo";
import "./home.css";

export default function Home() {
  return (
    <div className="HomePageDiv">
      <HomeHeader />
      <LastNews />
      <Homelifestyle />

      <HomeEducation />
      <Viedo />
      <Categorieslider />
      <Footer />
    </div>
  );
}
