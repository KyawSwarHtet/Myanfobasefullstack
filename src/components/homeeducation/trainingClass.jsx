import React from "react";
import EducationLeft from "./EducationLeft";
import EducationRight from "./EducationRight";
import "./trainingClass.css";

export default function TrainingClass() {
  return (
    <div className="classTop ">
      <article className="homeclass1">
        <div className="classimg">
          <img src="./images/homeimgs/school1.jpg" alt="" />
        </div>
        <h4>Where can I get some?</h4>
        <div className="postman1">
          <img src="./images/homeimgs/viedo4.jpg" alt="" />
          <span className="profileName1">Paina Ta Kon</span>
          <span className="profileDate1">20.3.2022</span>
        </div>
        <p className="justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </article>
      <article className="homeclass2">
        <div className="classimg">
          <img src="./images/homeimgs/school3.jpg" alt="" />
        </div>
        <h4>Where can I get some?</h4>
        <div className="postman1">
          <img src="./images/homeimgs/viedo4.jpg" alt="" />
          <span className="profileName1">Paina Ta Kon</span>
          <span className="profileDate1">20.3.2022</span>
        </div>
        <p className="justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </article>
      <EducationLeft />
      <EducationRight />
    </div>
  );
}
