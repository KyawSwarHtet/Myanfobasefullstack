import React from "react";
import "./advtecbar.css";
export default function StaySocial() {
  return (
    <div>
      <div className="Stayconnect-title">
        <h2>Stay Connected</h2>
        <span className="stayunderline"></span>
      </div>

      <div className="connect-socials">
        <div className="first-line-socials">
          <div className="connect-social">
            <div className="connect-logo">
              <i class="uil uil-facebook-f"></i>
            </div>
            <div className="followers">
              <p className="follower">235.9k Followers</p>
              <p>Like</p>
            </div>
          </div>
          <div className="connect-social2">
            <div className="connect-logo2">
              <i class="uil uil-youtube"></i>
            </div>
            <div className="followers">
              <p className="follower">213.7k Followers</p>
              <p>Subscribe</p>
            </div>
          </div>
        </div>
        <div className="sec-line-socials">
          <div className="connect-social3">
            <div className="connect-logo3">
              <i class="uil uil-twitter"></i>
            </div>
            <div className="followers">
              <p className="follower">213.6k Followers</p>
              <p>Follow</p>
            </div>
          </div>
          <div className="connect-social4">
            <div className="connect-logo4">
              <i class="uil uil-instagram"></i>
            </div>
            <div className="followers">
              <p className="follower">214.4k Followers</p>
              <p>Pin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
