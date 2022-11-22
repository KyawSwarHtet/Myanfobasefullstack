import React from "react";
import "./entermentbanner.css";
import { Grid } from "@mui/material";
// import CSSRulePlugin from "gsap/CSSRulePlugin";
// import { TimelineLite, Power2 } from "gsap";

export default function Entermentbanner() {
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
    <section className="mainetn1">
      <Grid
        my={3}
        container
        sx={{ margin: "auto", width: "100%", gap: "3rem" }}
        rowSpacing={3}
      >
        <Grid xs={5.5} sm={3.7}>
          <div className="firstetn">
            <div className="hansoetn">
              <img src="./images/homeimgs/kdrama1.jpeg" alt="" />
            </div>

            <div className="hansoetn_P">
              <p className="paragraph">
                Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
                poster for ‘Why Her’ The SBS drama is set to premiere soon!
              </p>
            </div>
          </div>
        </Grid>
        <Grid xs={5.5} sm={3.7}>
          <div className="secetn">
            <div className="moneyheist">
              <img src="./images/entertainment/moneyheist.jpg" alt="" />
            </div>
            <div className="moneyheist_P">
              <p>
                Seo Hyun Jin, Hwang In Yeop & more star in an intriguing <br />{" "}
                group poster for ‘Why Her’ The SBS drama is set
                <br /> to premiere soon!
              </p>
            </div>
          </div>
        </Grid>
        <Grid xs={6} sm={3.7}>
          <div className="thirdetn">
            <div className="jurassic">
              <img src="./images/entertainment/jurassic.jpg" alt="" />
            </div>
            <div className="jurassic_P">
              <p>
                Seo Hyun Jin, Hwang In Yeop & more star in an intriguing group
                poster for ‘Why Her’ The SBS drama is set to premiere soon!
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
