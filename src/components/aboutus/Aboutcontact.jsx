import React from "react";
import "./about.css";

export default function Aboutcontact() {
  return (
    <div className="about_main_contact">
      <div className="abmain_heading">
        <h1>Contact Us</h1>

        <div className="about_border_contact">
          <p>
            At vero eos et accusanus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque
          </p>
          <div className="about_testform">
            <textarea placeholder="email< ^ ~ ^ >"></textarea>
          </div>

          <div className="text">
            {/* <textarea
              name=""
              id=""
              colse="100"
              rows="8"
              placeholder="Your Comment"
            ></textarea> */}

            <textarea placeholder="adress< ^ ~ ^ >"></textarea>
          </div>
        </div>
        <buttom className="button_contactus btnlast">Contact Us</buttom>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15275.631849412832!2d96.12209588501248!3d16.830921415535474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194c83da2329f%3A0x6c847def2d82a317!2zNiDhgIXhgLbhgJvhgK3hgJXhgLrhgIThgLzhgK3hgJnhgLog4YGFIOGAnOGAmeGAuuGAuCwg4YCb4YCU4YC64YCA4YCv4YCU4YC6!5e0!3m2!1smy!2smm!4v1648795970311!5m2!1smy!2smm"
          width="600"
          height="450"
          // style="border:0;"
          // allowfullscreen=""
          // loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
