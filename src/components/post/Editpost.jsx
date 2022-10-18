import React from "react";
import { useState, useEffect } from "react";
import { updatePosts, getPostDetail, UpdateData } from "../../data/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";
import "./textform.css";
import "./postform.css";
import "./dropdowncate.css";
import { editPost, updatePostData } from "../../features/posts/postSlice";

export default function EditPost() {
  const [editpost, setEditpost] = useState({
    title: "",
    description: "",
    cateName: "",
    cateId: "",
    files: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const editpostid = async () => {
      const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
      const res = await reqdata.json(); // JSON.parse(json);
      console.log("res data is ", res);
      setEditpost(await res);
      setDescription(await res.description);
      setTitle(await res.title);
      setSelected(await res.cateName);
      setSelectedId(await res.cateId);
      setPostimg(await res.files);
    };
    editpostid();
  }, [id]);

  const [selected, setSelected] = useState();
  const [selectedId, setSelectedId] = useState();
  const [isActive, setIsActive] = useState(false);
  // console.log("cate ID default Selected is", editpost.title);
  // console.log("cate Name default Selected is", selected);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  // console.log("Id is", id);
  // console.log("title default is", title);

  const [postImg, setPostimg] = useState([]);
  console.log("edit post edditpost", editpost);
  console.log("files before update PostImg is", postImg[0]);
  //   console.log("files after update is", editpost.files[1]);

  const [listOfCate, setListOfCate] = useState([]);

  useEffect(() => {
    // Axios.get("https://desolate-hollows-16342.herokuapp.com/readcate")
    Axios.get("http://localhost:8080/readcate")
      .then((response) => {
        setListOfCate(response.data);
        // console.log("categories inside", response.data);
      })
      .catch(() => {
        alert("Awww, it didn't work at getting data");
      });
  }, []);

  const updateBtn = async (e) => {
    // e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("cateId", selectedId);
    formData.append("cateName", selected);
    formData.append("description", description);
    for (let i = 0; i < postImg.length; i++) {
      formData.append("files", postImg[i]);
    }
    console.log("form data is", formData);
    dispatch(updatePostData(formData)).then(() => navigate("/profile"));

    // await updatePosts(id, formData);
    // const reslut2 = await dispatch(editPost(formData))
    //
    // .then(() => {
    //   setEditpost({
    //     title: title,
    //     description: description,
    //     cateId: selectedId,
    //     cateName: selected,
    //     files: postImg,
    //   });
    // });
  };

  return (
    <>
      <div className="formDiv">
        <form
          //   onSubmit={handleEditpost}
          className="postForm"
          action=""
          method="POST"
          encType="multipart/form-data"
        >
          <h3>Update your information</h3>
          <div className="dropdown cateflex">
            <h3 className="catechoose">Choose Category:</h3>
            <div>
              <div
                className="dropdown-btn"
                onClick={(e) => setIsActive(!isActive)}
              >
                <option value={selected}>
                  {/* {selected === 0 ? editpost.cateName : selected} */}
                  {selected}
                  <i class="fa-solid fa-square-caret-down"></i>
                </option>
              </div>
              {isActive && (
                <div className="dropdown-content">
                  {listOfCate.map((option) => (
                    <div
                      onClick={(e) =>
                        setSelected(option.catename)(setIsActive(false))
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
            <label htmlFor="titleFormid">Title:</label>
            <textarea
              id="titleFormid"
              className="titleForm"
              placeholder="Type title here..."
              name="title"
              rows={1}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="titleDiv">
            <label htmlFor="descformid">Description:</label>
            <textarea
              id="descformid"
              name="description"
              className="titleForm"
              value={description}
              placeholder="Type Description here..."
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              // onChange={handleChange}
              rows={1}
              required
            />
          </div>
          <br />
          <br />
          <div className="imgDiv">
            <label>Upload Image:</label>
            <input
              type="file"
              // name="files"
              multiple
              onChange={(event) => {
                setPostimg(event.target.files);
              }}
              // onChange={handleChange}
            />
          </div>
        </form>
        <button onClick={updateBtn} type="submit" className="postButton">
          Update
        </button>
        <div className="imgShow">
          {editpost.files.map((file) => (
            <div className="Imgarea">
              <div className="imgDiv1">
                {console.log("file path is", file.filePath)}
                <img
                  src={`http://localhost:8080/${file.filePath}`}
                  height="200"
                  alt={`${file.cateName}`}
                  // src={`https://desolate-hollows-16342.herokuapp.com/${file.filePath}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
