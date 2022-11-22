import React from "react";
import { useState, useEffect } from "react";
import { updatePosts, getPostDetail, UpdateData } from "../../data/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";
import "./textform.css";
import "./postform.css";
import "./dropdowncate.css";
import { updatePostData } from "../../features/posts/postSlice";
import { useRef } from "react";

export default function NewEditPost() {
  const [editpost, setEditpost] = useState();

  const [input, setInput] = useState({
    title: "",
    description: "",
    cateName: "",
    cateId: "",
    files: [],
  });

  const setTextarea = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setTextarea(e, "100px");
  };

  const onChangeImg = (e) => {
    e.preventDefault();
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.files,
    }));
  };

  const onChangeCate = (cate) => {
    // e.preventDefault();
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const editpostid = async () => {
      // const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
      const reqdata = await fetch(
        `https://desolate-hollows-16342.herokuapp.com/editpost/${id}`
      );
      // const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
      const res = await reqdata.json(); // JSON.parse(json);
      console.log("res data is ", res);
      return res;
    };

    editpostid().then((data) => {
      setEditpost(data);
      setInput({
        title: data.title,
        description: data.description,
        cateName: data.cateName,
        cateId: data.cateId,
        files: data.files,
      });
    });
  }, [id]);

  const [isActive, setIsActive] = useState(false);
  const [listOfCate, setListOfCate] = useState([]);

  const titleRef = useRef(null);
  const descRef = useRef(null);

  //   useEffect(() => {
  //     titleRef.current = input.title;
  //     descRef.current = input.description;
  //   }, [input.title, input.description]);

  console.log("titel ref is", titleRef.current);
  console.log("desc ref is", descRef.current);

  useEffect(() => {
    Axios.get("https://desolate-hollows-16342.herokuapp.com/api/category")
      // Axios.get("http://localhost:8080/api/category")
      .then((response) => {
        setListOfCate(response.data);
        // console.log("categories inside", response.data);
      })
      .catch(() => {
        alert("Awww, it didn't work at getting data");
      });
  }, []);
  // console.log("input before formdata is", input.files[0]);
  const updateBtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    titleRef.current.focus();
    descRef.current.focus();

    formData.append("id", id);
    formData.append("title", titleRef.current.value);
    formData.append("cateId", input.cateId);
    formData.append("cateName", input.cateName);
    formData.append("description", descRef.current.value);
    formData.append("postAccept", editpost.postAccept);
    for (let i = 0; i < input.files.length; i++) {
      formData.append("files", input.files[i]);
      console.log("input file wihtin after formdata is", input.files[i]);
    }

    dispatch(updatePostData(formData)).then(() => navigate("/profile"));
  };

  return (
    <>
      {editpost && (
        <div className="postDiv">
          <div className="postbg updateheader">
            <h2>Update your information</h2>
          </div>
          <div className="formDiv container">
            <form
              //   onSubmit={handleEditpost}
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
                    <option value={input.cateName}>
                      {/* {selected === 0 ? editpost.cateName : selected} */}
                      {input.cateName}
                    </option>
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
                          // onChange={onChange}
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
                  rows={1}
                  //   value={titleRef.current.value}
                  ref={titleRef}
                  onChange={setTextarea}
                  required
                />
              </div>
              <div className="titleDiv">
                <label htmlFor="descformid" className="labelDes">
                  Description:
                </label>
                <textarea
                  id="descformid"
                  name="description"
                  className="descForm textdesign"
                  //   value={descRef.current.value}
                  placeholder="Type Description here..."
                  ref={descRef}
                  onChange={setTextarea}
                  rows={1}
                  required
                />
              </div>
              {console.log("data changes")}
              <br />
              <br />
              <div className="imgDiv">
                <label className="labelimg">Upload Image:</label>
                <input
                  type="file"
                  name="files"
                  multiple
                  onChange={onChangeImg}
                />
              </div>
            </form>
            <button onClick={updateBtn} type="submit" className="postButton">
              Update
            </button>
            <div className="imgShow">
              {editpost.files &&
                editpost.files.map((file) => (
                  <div className="Imgarea">
                    <div className="imgDiv1">
                      {/* {console.log("file path is", file.filePath)} */}
                      <img
                        src={`https://desolate-hollows-16342.herokuapp.com/${file.filePath}`}
                        // src={`http://localhost:8080/${file.filePath}`}
                        height="200"
                        alt={`${file.cateName}`}
                        // src={`https://desolate-hollows-16342.herokuapp.com/${file.filePath}`}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
