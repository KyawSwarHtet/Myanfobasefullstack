import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Exercise from "../../components/lifestyle/lifestyleSetmenu/exercise/exercise";
import ExerciseBanner from "../../components/lifestyle/lifestyleSetmenu/exercise/exerciseBanner";
import ExercisePopular from "../../components/lifestyle/lifestyleSetmenu/exercise/exercisePopular";
import ExerciseSidebar from "../../components/lifestyle/lifestyleSetmenu/exercise/exerciseSidebar";


export default function ExercisePage() {
  return (
    <>
      <section className="container">
        <Exercise />
        <ExerciseBanner />
        <section className="tecbody">
          <ExerciseSidebar />
          <div className="allRightBar">
            <ExercisePopular />
            <Latestbar />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
