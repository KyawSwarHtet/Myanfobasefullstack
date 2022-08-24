import React from "react";
// import "./artssbanner.css";

export default function Surreatbanner() {
  return (
    <div className="artss">
      <div className="artphoto">
        <img src="./images/art/art2.avif" alt="" />
      </div>

      <div className="artpara">
        <h1>Chagall, Master Drawings</h1>
        <div className="datepara">
          <p>
            FEBRUARY 27-MAY 28, 2018 <br />
            On view at The Met First Avenue <br />
            in Gallery 209
          </p>
        </div>

        <div className="companypara">
          <p>
            Accompained by a catalogue and <br />
            an Audio Guide
          </p>
        </div>
      </div>
    </div>
  );
}



