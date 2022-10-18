import React from "react";
import { useRef } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import "./textform.css";

export default function FormSample() {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);

  const handleInputHeight = () => {
    const scrollHeight = inputRef.current.scrollHeight;
    inputRef.current.style.height = scrollHeight + "px";
  };

  const handleInputChange = () => {
    setInputVal(inputRef.current.value);
    handleInputHeight();
  };

  return (
    <>
      <div className="descDiv">
        <h3>Description:</h3>
        <textarea
          className="descArea"
          placeholder="Description here..."
          ref={inputRef}
          value={inputVal}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleInputHeight(e);
              inputRef.current.style.height = "40px";
            }
          }}
        />
        <br />
        <br />
      </div>

      <div className="imgDiv">
        <h3>Upload Image:</h3>
        <input type="file" multiple />
      </div>
    </>
  );
}
