import React from "react";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./textform.css";
import "./postform.css";
import "./dropdowncate.css";
import { createPost } from "../../features/posts/postSlice";

export default function CreatePost(props) {
  const [input, setInput] = useState({
    cateName: "Choose One",
    cateId: "0",
    title: "",
    description: "",
    files: [],
  });
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const setTextarea = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  const { categories } = useSelector((state) => state.categories);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.files === [] ||
      input.files.length === 0 ||
      titleRef.current.value.length === 0 ||
      input.cateId == 0 ||
      descRef.current.value.length == 0
    ) {
      return alert("please fill all data");
    }

    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    formData.append("cateId", input.cateId);
    formData.append("cateName", input.cateName);
    formData.append("description", descRef.current.value);
    for (let i = 0; i < input.files.length; i++) {
      formData.append("files", input.files[i]);
    }
    titleRef.current.value = "";
    descRef.current.value = "";

    dispatch(createPost(formData)).then(() => navigate("/profile"));
  };

  const onChangeImg = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.files,
    }));
  };
  const onChangeCate = (cate) => {
    setInput((prevState) => ({
      ...prevState,
      cateName: cate,
    }));
  };
  const onChangeCateId = (Id) => {
    setInput((prevState) => ({
      ...prevState,
      cateId: Id,
    }));
  };

  return (
    <div className="formDiv" key="">
      <form
        onSubmit={handleSubmit}
        className="postForm"
        action=""
        method="POST"
        encType="multipart/form-data"
      >
        <div className="dropdown cateflex">
          <h3 className="catechoose">Choose Category:</h3>
          <div>
            <div
              className="dropdown-btn"
              onClick={(e) => setIsActive(!isActive)}
            >
              {input.cateName}
              <i class="fa-solid fa-square-caret-down"></i>
            </div>
            {isActive && (
              <div className="dropdown-content">
                {categories &&
                  categories.map((option) => (
                    <div
                      onClick={(e) =>
                        onChangeCateId(option._id)(
                          onChangeCate(option.catename)(setIsActive(false))
                        )
                      }
                      className="dropdown-item"
                    >
                      {option.catename}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="titleDiv">
          <label htmlFor="titleFormid" className="labelDes">
            Title:
          </label>
          <textarea
            id="titleFormid"
            className="titleForm textdesign"
            placeholder="Type title here..."
            name="title"
            ref={titleRef}
            rows={1}
            required
            onChange={setTextarea}
          />
        </div>
        {console.log("data is", titleRef)}
        <div className="titleDiv">
          <label htmlFor="descformid" className="labelDes">
            Description:
          </label>
          <textarea
            id="descformid"
            className="titleForm textdesign"
            placeholder="Type Description here..."
            name="description"
            ref={descRef}
            rows={1}
            required
            onChange={setTextarea}
          />
        </div>
        <br />
        <br />
        <div className="imgDiv">
          <label>Upload Image:</label>
          <input
            type="file"
            name="files"
            required
            multiple
            onChange={onChangeImg}
          />
        </div>
        <button type="submit" className="postButton">
          Post
        </button>
      </form>
    </div>
  );
}
