import React from "react";
import { useState, useEffect } from "react";
import { updatePosts, getPostDetail, UpdateData } from "../../data/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import "./textform.css";
import "./postform.css";
import "./dropdowncate.css";
import { updatePostData } from "../../features/posts/postSlice";

export default function EditPost() {
  const [editpost, setEditpost] = useState();

  const [input, setInput] = useState({
    title: "",
    description: "",
    cateName: "",
    cateId: "",
    files: [],
  });

  const { categories } = useSelector((state) => state.categories);

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
      const reqdata = await fetch( `https://desolate-hollows-16342.herokuapp.com/editpost/${id}` );
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

  const updateBtn = async (e) => {
    // e.preventDefault();
    const formData = new FormData();

    formData.append("id", id);
    formData.append("title", input.title);
    formData.append("cateId", input.cateId);
    formData.append("cateName", input.cateName);
    formData.append("description", input.description);
    formData.append("postAccept", editpost.postAccept);
    for (let i = 0; i < input.files.length; i++) {
      formData.append("files", input.files[i]);
      console.log("input file wihtin after formdata is", input.files[i]);
    }
    // const resultData = Object.fromEntries(formData.entries(id));
    // console.log("form data transform is", resultData.id);

    dispatch(updatePostData(formData)).then(() => navigate("/profile"));
  };

  return (
    <>
      {editpost && (
        <div className="postDiv" key={editpost._id}>
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
                      <i class="fa-solid fa-square-caret-down"></i>
                    </option>
                  </div>
                  {isActive && (
                    <div className="dropdown-content">
                      {categories &&
                        categories.map((option) => (
                          <div
                            onClick={(e) =>
                              onChangeCateId(option._id)(
                                onChangeCate(option.catename)(
                                  setIsActive(false)
                                )
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
                  value={input.title}
                  // onChange={(event) => {
                  //   setEditpost(event.target.value);
                  // }}
                  onChange={onChange}
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
                  value={input.description}
                  placeholder="Type Description here..."
                  // onChange={(event) => {
                  //   setEditpost(event.target.value);
                  // }}
                  onChange={onChange}
                  rows={1}
                  required
                />
              </div>
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
                        src={file.filePath}
                        // src={`https://desolate-hollows-16342.herokuapp.com/${file.filePath}`}
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
