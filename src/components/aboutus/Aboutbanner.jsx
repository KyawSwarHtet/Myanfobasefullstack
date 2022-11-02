import React from "react";
import "./about.css";

export default function Aboutbanner() {
  return (
    <div className="main_about">
      <div className="about_sec">
        <h2>
          HEATING AND AIR CONDITIONING REPAIR AND <br />
          INSTALLATION COMPANY
        </h2>
        <span className="Lifeline"></span>
      </div>

      <div className="about_sec_para">
        <p>
          Ac vulputate morbi sit amet, consectetur adipiscing elit. Pellentesque
          accumsan bibendum bibendum diam et. Ac vulputate morbi egestas porta
          posuere curabitur. Pellentesque accumsan bibendum bibendum diam et. Ac
          vulputate morbi egestas porta posuere curabitur. Torem Ipsum is simply
          dummy text of the printing and typesetting industry. Rem Ipsum has
          been the industry's standard dummy text ever since the 1500s, When an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Rem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of the ac
          repair.
        </p>
        <div className="about_sec_mission">
          <div className="ourmission">
            <h3>Our Mission</h3>
            <p>
              Bibendum bibendum diam sit amet, consectetur adipiscing elit.
              Pellentesque accumsan bibendum bibendum diam et. Ac vulputate
              morbi egestas porta posuere curabitur.
            </p>
            <p className="p2">
              Pellentesque accumsan bibendum bibendum diam et. Ac vulputate
              morbi egestas porta posuere curabitur.
            </p>
          </div>

          <div className="ourvision">
            <h3>Our Vision</h3>
            <p>
              Bibendum bibendum diam sit amet, consectetur adipiscing elit.
              Pellentesque accumsan bibendum bibendum diam et. Ac vulputate
              morbi egestas porta posuere curabitur.
            </p>
            <p className="p2">
              Pellentesque accumsan bibendum bibendum diam et. Ac vulputate
              morbi egestas porta posuere curabitur.
            </p>
          </div>
        </div>
      </div>
      <div className="about_third">
        <div className="about_border">
          <div className="about_photo">
            <img
              className="about_photo1"
              src="./images/aboutus/dot.jpg"
              alt=""
            />

            <img
              className="about_photo2"
              src="./images/aboutus/pc1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="whychoose">
          <h3>Why Choose Us</h3>
          <p>
            Highly satisfied customer testimonials are ads or artwork that
            display positive statements made about your company from a brand
            evangelist or a that. The quote is usually accompanied by an image
            of the person being quoted to make the message feel more relatable
            to the target audience.
          </p>
          <buttom className="about btnlast">Contact Us</buttom>
        </div>
      </div>
    </div>
  );
}


