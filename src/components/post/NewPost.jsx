import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./textform.css";
import "./postform.css";
import "./dropdowncate.css";
import { createPost } from "../../features/posts/postSlice";
import { useRef } from "react";

export default function NewPost(props) {
  const [input, setInput] = useState({
    cateName: "Choose One",
    cateId: "0",
    title: "",
    description: "",
    files: [],
  });
  const inputRef = useRef();

  const setTextarea = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  // console.log("initial inpusetstate is", input);
  const [isActive, setIsActive] = useState(false);

  const [listOfCate, setListOfCate] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setTextarea(e, "100px");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.files === [] ||
      input.files.length === 0 ||
      input.description.length === 0 ||
      input.cateId == 0 ||
      input.title.length == 0
    ) {
      return alert("please fill all data");
    }

    // const formData = new FormData(e.target);
    // console.log("Form Data from submit", Object.fromEntries(data.entries()));
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("cateId", input.cateId);
    formData.append("cateName", input.cateName);
    formData.append("description", input.description);
    for (let i = 0; i < input.files.length; i++) {
      formData.append("files", input.files[i]);
    }

    console.log("Form data from post is", formData);
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

  useEffect(() => {
    Axios.get("https://desolate-hollows-16342.herokuapp.com/readcate")
      // Axios.get("http://localhost:8080/readcate")
      .then((response) => {
        setListOfCate(response.data);
        console.log("categories inside", response.data);
      })
      .catch(() => {
        alert("Awww, it didn't work at getting categories data");
      });
  }, []);

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
                {listOfCate.map((option) => (
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
            onChange={onChange}
            value={input.title}
            rows={1}
            required
          />
        </div>
        <div className="titleDiv">
          <label htmlFor="descformid" className="labelDes">
            Description:
          </label>
          <textarea
            id="descformid"
            className="titleForm textdesign"
            placeholder="Type Description here..."
            name="description"
            onChange={onChange}
            rows={1}
            value={input.description}
            required
          />
        </div>
        <br />
        <br />
        <div className="imgDiv">
          <label>Upload Image:</label>
          <input type="file" name="files" multiple onChange={onChangeImg} />
        </div>
        <button type="submit" className="postButton">
          Post
        </button>
      </form>
    </div>
  );
}
