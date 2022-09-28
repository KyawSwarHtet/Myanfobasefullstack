import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";
import Language from "./dropdown/Language";

import "./header.css";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="headercolor">
      <nav className="headerwrap ">
        <ul className="headerfirst">
          <li>
            <Link to="/" className="nav-logo">
              <img src="./images/homeimgs/logo2.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hoverclor">
              <i class="uil uil-home"></i>
              <span className="capitalize">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex hoverclor">
              <i class="uil uil-search"></i>
              <span className="capitalize">Search</span>
            </Link>
          </li>
          <li
            className="homeMenu"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div className="flex hoverclor">
              <i class="uil uil-list-ul"></i>
              <span className="capitalize">Menu</span>
            </div>
            {dropdown && <Dropdown className="dropdownWrap" />}
          </li>
          <li>
            <Link to="/post" className="flex hoverclor">
              <i class="uil uil-plus-circle"></i>
              <span className="capitalize">Post</span>
            </Link>
          </li>
        </ul>
        <ul className="headersecond">
          <li>
            <Link to="/subscribe" className="flex">
              <button className="subscribebtn">Subscribe</button>
            </Link>
          </li>
          <li className="language">
            {/* <img src="./images/homeimgs/englang.jpg" alt="" />
              <span>Eng</span> */}
            <Language label="choose an language" />
          </li>
          <li>
            <Link to="/login" className="login">
              <i class="uil uil-user loginicon"></i>
              <span className="capitalize">Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
