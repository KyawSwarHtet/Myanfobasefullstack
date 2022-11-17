import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function SavePost(props) {
  const { user: User } = useSelector((state) => state.auth);
  // const [categories, setCategories] = useState({
  //   user: props.getCateData.user,
  //   title: props.getCateData.title,
  //   cateId: props.getCateData.cateId,
  //   cateName: props.getCateData.cateName,
  //   files: props.getCateData.files[0].filePath,
  // });
  // const getCateData = props.getCateData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("save category are", categories);
  console.log("save category user is", User);
  useEffect(() => {
    const variable = {
      user: props.getCateData.user,
      title: props.getCateData.title,
      cateId: props.getCateData.cateId,
      cateName: props.getCateData.cateName,
      files: props.getCateData.files[0].filePath,
    };
    axios.post("/favourite", variable).then((response) => {
      if (response.data.success) {
      } else {
        alert("Failed to get Favourite Number");
      }
    });
  }, []);

  return (
    <div>
      <i className="uil uil-bookmark"></i>
    </div>
  );
}
