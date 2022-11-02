import React from "react";
import "./detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Socialbar() {
  return (
    <div className="social-container">
      <a href="https://www.youtube.com/" className="youtube social1">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/" className="facebook social1">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/" className="twitter social1">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/" className="instagram social1">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
