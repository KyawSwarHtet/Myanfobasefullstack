import React from "react";
import EditPost from "../../components/post/Editpost";
import NewEditPost from "../../components/post/NewEditPost";

import "./postformpage.css";

export default function UpdateformPage() {
  return (
    <>
      <section>
        <EditPost />
        {/* <NewEditPost /> */}
      </section>
    </>
  );
}
