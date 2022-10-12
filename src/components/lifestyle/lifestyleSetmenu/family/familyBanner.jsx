import React from "react";
import "../../../beauty/beautybanner.css";
import "animate.css";
export default function FamilyBanner() {
  return (
    <section className="beauty-banner ">
      <div className="beauty-firstrow">
        <div className="firstrow-firstdiv">
          <div className="blogger-img">
            <img src="./images/homeimgs/May-Oo-Makeup-7.jpg" alt="" />
          </div>
          <div className="blogger-para">
            <div className="blogger-p">
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                iusto deserunt fuga nam soluta quae suscipit incidunt,
                consectetur totam tenetur modi illo neque! Voluptas cupiditate
                reiciendis consectetur? Unde, expedita saepe.
              </p>
            </div>
          </div>
        </div>
        <div className="low-photos">
          <div className="firstrow-secdiv">
            <div className="skincare-img">
              <img src="./images/homeimgs/skincare.jpg" alt="" />
            </div>
            <div className="skin-p">
              <div className="skincare-para">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
            </div>
          </div>
          <div className="firstrow-thirddiv">
            <div className="makeup-img">
              <img src="./images/homeimgs/makeup.jpg" alt="" />
            </div>
            <div className="makeup-p">
              <div className="makeup-para">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ban-secrow">
        <div className="seccol-firstdiv">
          <div className="secrow-firstdiv">
            <div className="beauty-img">
              <img src="./images/homeimgs/beauty-salon.jpg" alt="" />
            </div>
            <div className="beauty-p">
              <div className="beauty-para">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
            </div>
          </div>

          <div className="secrow-secdiv">
            <div className="clinic-img">
              <img src="./images/homeimgs/skin-clinic.jpg" alt="" />
            </div>
            <div className="clinic-p">
              <div className="clinic-para">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="secrow-thirddiv">
          <div className="natural-img">
            <img src="./images/homeimgs/natural.jpg" alt="" />
          </div>
          <div className="natural-p">
            <div className="natural-para">
              <h4 className="animate__fadeOut">Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
