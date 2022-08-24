import React from "react";

export default function PoetryBanner() {
  return (
    <section className="catebannerImg">
      <div className="leftBanner">
        <div className="catebanner1">
          <img src="./images/literature/poetry/poetrybanner1.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">literature</button>
          <h4>How to Mark yourself 'Safe' on Socials Media</h4>
          <p className="leftparaText">
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </article>
      </div>
      <div className="rightBanner">
        <div className="catebanner2">
          <img src="./images/literature/poetry/poetrybanner2.jpg" />
        </div>
        <article className="bannerPara">
          <button className="cateLiterature">literature</button>
          <h4>How to Mark yourself 'Safe' on Socials Media</h4>
          <p className="rightparaText">
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </article>
      </div>
    </section>
  );
}
