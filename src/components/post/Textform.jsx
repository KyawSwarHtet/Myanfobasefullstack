import React from "react";
import "./textform.css";
export default function Textform() {
  return (
    <>
      <div className="titleDiv">
        <h3>Title:</h3>
        <textarea
          className="titleForm"
          ref={(c) => (this.textarea = c)}
          placeholder="Type title here..."
          rows={1}
          defaultValue=""
          required
        />
      </div>
      <div className="titleDiv">
        <h3>Description:</h3>
        <textarea
          className="descForm"
          ref={(c) => (this.textarea = c)}
          placeholder="Type Description here..."
          rows={1}
          defaultValue=""
          required
        />
      </div>
      <br />
      <br />
      <div className="imgDiv">
        <h3>Upload Image:</h3>
        <input type="file" multiple />
      </div>
    </>
  );
}
