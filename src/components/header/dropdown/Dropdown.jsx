import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropdownItems } from "./dropdownItem";
import "./dropdown.css";

export default function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <ul
      className={dropdown ? "categoriessub clicked" : "categoriessub"}
      onClick={() => setDropdown(!dropdown)}
    >
      {DropdownItems.map((item) => {
        return (
          <li key={item.id} className="catgitems">
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setDropdown(false)}
            >
              <h5>{item.title}</h5>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
