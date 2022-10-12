import "./homelifestyle.css";
import Lifestylenew from "./Lifestylenew";
import SponserContent from "./SponserContent";

export default function Homelifestyle() {
  return (
    <section className="container LifestyleSect">
      <h2>Lifestyle News</h2>
      <span className="Lifeline"></span>
      <div id="lifestyles-New">
        <Lifestylenew />
        <SponserContent />
      </div>
    </section>
  );
}
