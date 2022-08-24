import React from "react";
import { useState } from "react";
import "./dropdowncate.css";

export default function DropdownCate({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Entertainment",
    "Tehnology",
    "Beauty",
    "Government",
    "Travel",
    "History",
    "Health",
    "Lierature",
    "Lifestyles",
    "Science",
    "Sports",
    "Arts",
  ];

  return (
    <div className="dropdown cateflex">
      <h3 className="catechoose">Choose Category:</h3>
      <div>
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <i class="fa-solid fa-square-caret-down"></i>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                onClick={(e) => setSelected(option)(setIsActive(false))}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
