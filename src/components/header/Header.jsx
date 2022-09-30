import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";
import Language from "./dropdown/Language";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import "./header.css";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

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
          {user ? (
            <>
              <li>
                <div className="dorpmenu-container">
                  <div className="login">
                    <div className="profile-img">
                      <img src="./images/sport/sport1.jpg" alt="" />
                    </div>
                    <i
                      id="loginsetting"
                      class="fa-solid fa-bars"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    ></i>
                  </div>
                  <div
                    id="dropdown-menu"
                    className={` ${open ? "active" : "inactive"}`}
                  >
                    <h3>kyaw swar</h3>
                    <ul>
                      <DropdownItem
                        data={"fa-solid fa-user"}
                        text={"My Profile"}
                        pathLink={"/profile"}
                      />
                      <DropdownItem
                        data={"fa-solid fa-user-pen"}
                        text={"Edit Profile"}
                      />
                      <DropdownItem
                        data={"fa-solid fa-circle-half-stroke"}
                        text={"Dark Mode"}
                      />

                      <li className="dropdownItem">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <button onClick={onLogout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="login">
                  <i class="fa-solid fa-right-to-bracket"></i>
                  <span className="capitalize">Login</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      {/* <img src={props.img}></img> */}
      <i class={props.data}></i>
      <Link to={`${props.pathLink}`}>{props.text}</Link>
    </li>
  );
}
