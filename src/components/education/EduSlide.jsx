import React from "react";

import Sidebar from "../sidebar/Sidebar";

export default function EduSlide({ getAllusers, getAllposts }) {
  return (
    <div className="">
      <Sidebar
        category={"Education"}
        getAllusers={getAllusers}
        getAllposts={getAllposts}
      />
    </div>
  );
}
