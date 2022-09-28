import { Link } from "react-router-dom";
import "./technology.css";

export default function Technology() {
  return (
    <>
      <section className="technology">
        <div className="top">
          <div className="homelink">
            <ul>
              <li>
                <Link to="/" className="link1">
                  <h4>Home</h4>
                </Link>
              </li>
            </ul>
          </div>

          <div className="iconRightArrow">
            <i className="uil uil-angle-right-b"></i>
          </div>

          <h4>Technology</h4>
        </div>
        <div className="sectop">
          <h1>TECHNOLOGY</h1>
        </div>
        <div className="Catabutton">
          <Link to="/computer">
            <button className="tec">Computer</button>
          </Link>
          <Link to="/electronic">
            <button className="tec">Electronics</button>
          </Link>
          <Link to="/innovation">
            <button className="tec">Innovation</button>
          </Link>
          <Link to="/smartphone">
            <button className="tec">Smartphone</button>
          </Link>
          <Link to="/software">
            <button className="tec">Software</button>
          </Link>
        </div>
        <div className="para">
          <p>
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </div>
      </section>
      <section className="photo">
        <div className="firstphoto">
          <div className="tech-firstphoto">
            <img
              className="fbphoto"
              src="./images/homeimgs/technology.jpg"
              alt=""
            />
          </div>
          <div className="firstpara">
            <button className="cateTechnology">Technology</button>
            <h4 className="technoloColor">
              How to Mark yourself 'Safe' on Socials Media
            </h4>
            <p>
              Modern technology has become a total phenomenon for civilization,
              the defining force of a new social order in which efficiency is no
              longer an option but a necessity imposed on all human activity.
            </p>
          </div>
        </div>
        <div className="secphoto">
          <div className="secrobot">
            <div className="tecsecdiv-firstphoto">
              <img
                className="robotphoto"
                src="./images/homeimgs/techhyperx.jpg"
                alt=""
              />
            </div>
            <div className="robotpara">
              <button className="cateTechnology">Technology</button>
              <h4 className="technoloColor">
                Corsair HS80 RGB Wireless Gaming Headset Review
              </h4>
            </div>
          </div>
          <div className="secair">
            <div className="tec-lastbannerphotos">
              <img
                className="airbudphoto"
                src="./images/homeimgs/techkeyboard.jpg"
                alt=""
              />
            </div>
            <div className="airbudpara">
              <button className="cateTechnology">Technology</button>
              <h4 className="technoloColor">
                Corsair HS80 RGB Wirless Gaming Headset Review
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
