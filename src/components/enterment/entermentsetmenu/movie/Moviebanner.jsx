import React from "react";

// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Moviebanner() {
  // let container = useRef(null);
  // let image = useRef(null);
  // let imageReveal = CSSRulePlugin.getRule(".hansoetn:after");

  // const tl = new TimelineLite();

  // useEffect(() => {
  //   tl.to(container, 1, { css: { visibility: "visible" } }).to(
  //     imageReveal,
  //     1.4,
  //     { width: "0%", ease: Power2.easeInOut }
  //   );
  // });

  return (
    <section>
      <div className="mainetn">
        <div className="firstetn">
          <div className="hansoetn">
            <img src="./images/entertainment/movie/movie11.jpg" alt="" />
          </div>

          <div className="hansoetn_P">
            <p className="paragraph">
              Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
              poster for ‘Why Her’ The SBS drama is set to premiere soon!
            </p>
          </div>
        </div>

        <div className="secetn">
          <div className="moneyheist">
            <img src="./images/entertainment/movie/movie22.jpg" alt="" />
          </div>
          <div className="moneyheist_P">
            <p>
              Seo Hyun Jin, Hwang In Yeop & more star in an intriguing <br />{" "}
              group poster for ‘Why Her’ The SBS drama is set
              <br /> to premiere soon!
            </p>
          </div>
        </div>

        <div className="thirdetn">
          <div className="jurassic">
            <img
              src="./images/entertainment/movie/movie33.jpg"
              alt=""
            />
          </div>
          <div className="jurassic_P">
            <p>
              Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
              poster for ‘Why Her’ The SBS drama is set to premiere soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



