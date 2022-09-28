import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section>
      <footer className="FooterColor">
        <div className="FooterDiv">
          <div className="footerWapper">
            <div className="AddressInfo lineheight">
              <div className="footertitle">
                <div className="spiderImg">
                  <img src="./images/homeimgs/logo2.png" alt="" />
                </div>
              </div>
              <h4>Address and Contact</h4>
              <div className="fotaddress">
                <i class="uil uil-home"></i>
                <h5>NO(10). Maharbowga street Yangon</h5>
              </div>
              <div className="fotaddress">
                <i class="uil uil-envelope-star"></i>
                <h5>
                  <a href="mailto:myanfobase@gmail.com">myanfobase@gmail.com</a>
                </h5>
              </div>
              <div className="fotaddress">
                <i class="uil uil-phone-volume"></i>
                <a href="tele:0925252525">
                  <h5>0933434334</h5>
                </a>
              </div>
              <div className="inputbox">
                <input
                  className="inputfooter"
                  type="text"
                  placeholder="Enter your email"
                />
                <i class="uil uil-envelope-open"></i>
              </div>
            </div>

            <div className="CategoryInfo lineheight">
              <ul>
                <li>
                  <h4>Category</h4>
                </li>
                <li>
                  <Link to="/business">business</Link>
                </li>
                <li>
                  <Link to="/entertainment">entertainment</Link>
                </li>
                <li>
                  <Link to="/fashion">fashion</Link>
                </li>
                <li>
                  <Link to="/food">food</Link>
                </li>
                <li>
                  <Link to="/health">health</Link>
                </li>
                <li>
                  <Link to="/lifestyle">lifestyle</Link>
                </li>
              </ul>
            </div>

            <div className="AboutInfo lineheight">
              <ul>
                <li>
                  <h4>About</h4>
                </li>
                <li>About Us</li>
                <li>Carrers</li>
                <li>Where to Buy</li>
                <li>investor Relation</li>
                <li>Student Discount</li>
              </ul>
            </div>

            <div className="TagInfo lineheight">
              <ul>
                <li>
                  <h4>Social & Payment</h4>
                </li>
                <li>
                  <i class="uil uil-facebook-f"></i>
                  <span>Facebook</span>
                </li>
                <li>
                  <i class="uil uil-instagram"></i>
                  <span>Instagram</span>
                </li>
                <li>
                  <i class="uil uil-twitter-alt"></i>
                  <span>Twitter</span>
                </li>
                <li>
                  <i class="uil uil-youtube"></i>
                  <span>Youtube</span>
                </li>
              </ul>
              <div>
                <ul className="fotpayment">
                  <li>
                    <img src="./images/homeimgs/kpay.png" alt="" />
                  </li>
                  <li>
                    <img src="./images/homeimgs/wavemoney.jpg" alt="" />
                  </li>
                  <li>
                    <img src="./images/homeimgs/CBPay.png" alt="" />
                  </li>
                  <li>
                    <img src="./images/homeimgs/ayapay.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className="footerunderline"></span>
          <p className="copyright">
            &copy; Copyright 2022. <span> SGcamp (3) Webdevelopment Team</span>
          </p>
        </div>
      </footer>
    </section>
  );
}
