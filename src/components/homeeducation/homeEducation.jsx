import React from "react";
import AdvertiseEducation from "./AdvertiseEducation";

import "./homeeducation.css";

import TrainingClass from "./trainingClass";

export default function HomeEducation() {
  return (
    <section className="container EducSect">
      <div className="titleEducation">
        <h2>Technology Trainning Class</h2>
        <span className="headerline"></span>
      </div>
      <div className="educationHOme">
        <div id="homeeducation" className="edusection">
          <TrainingClass />
          <AdvertiseEducation />
        </div>
      </div>
    </section>
  );
}
