import React from "react";
import Select from "react-select";
import "./language.css";

const options = [
  {
    label: <img src="./images/homeimgs/englang.jpg" />,
    english: "english",
    value: "english",
  },
  {
    label: <img src="./images/homeimgs/myanmarlang.jpg" />,
    english: "myanmar",
    value: "myanmar",
  },
];

function onChangeInput(value) {
  console.log(value);
}
export default function Language() {
  return (
    <div>
      <Select
        options={options}
        onChange={onChangeInput}
        defaultValue={[options[0], options[0][1]]}
      />
    </div>
  );
}
