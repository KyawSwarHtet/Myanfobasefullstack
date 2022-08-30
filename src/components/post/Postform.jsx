import React from "react";
import { useState } from "react";
import DropdownCate from "./DropdownCate";
// import FormSample from "./FormSample";
// import FormSample from "./FormSample";
import "./postform.css";
import Testpost from "./Testpost";
// import Textform from "./Textform";

export default function Postform() {
  const [selected, setSelected] = useState("Choose One");
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <section className="postbg">
        <div className="container firstdesc">
          <h2 className="capitalize">
            Let's share your experience and knowledge on our website!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            corporis consequuntur harum ab minima et, necessitatibus sit
            blanditiis a at tempore unde eius minus veritatis odit aliquid
            consequatur accusantium eum.
          </p>
        </div>
      </section>
      <div className="container formBody">
        <DropdownCate
          selected={selected}
          setSelected={setSelected}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        {console.log("data from form data is", selected)}
        {console.log("id from form data is", selectedId)}

        <div className="formDiv">
          <Testpost
            selected={selected}
            setSelected={setSelected}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
      </div>
    </>
  );
}
