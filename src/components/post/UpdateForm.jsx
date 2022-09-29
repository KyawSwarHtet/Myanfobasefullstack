import React from "react";
import { useState, useEffect } from "react";
import { updatePosts, getPostDetail } from "../../data/api";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./textform.css";
import "./postform.css";
import "./dropdowncate.css";
const fs = require("fs");

export default function UpdateForm() {
  const [editpost, setEditpost] = useState({
    title: "",
    description: "",
    cateName: "",
    cateId: "",
    files: [],
  });
  const { id } = useParams();
  const [msg, setMsg] = useState("");
  console.log("id is ", id);
  console.log("edit post is ", editpost);

  useEffect(() => {
    const editpostid = async () => {
      const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
      const res = await reqdata.json(); // JSON.parse(json);
      setEditpost(await res);
    };
    editpostid();
  }, []);

  console.log("description default is", editpost.description);
  console.log("cate name default is", editpost.cateName);
  console.log("cate ID default is", editpost.cateId);
  const [selected, setSelected] = useState(0);
  const [selectedId, setSelectedId] = useState(editpost.cateId);
  const [isActive, setIsActive] = useState(false);
  console.log("cate ID default Selected is", selected);
  const [title, setTitle] = useState(editpost.title);
  const [description, setDescription] = useState(editpost.description);
  console.log("description is", description);
  console.log(`initial title value is ,${editpost.title} `);

  const [postImg, setPostimg] = useState(editpost.files);
  console.log("file image is", postImg);

  const [listOfCate, setListOfCate] = useState([]);

  useEffect(() => {
    // Axios.get("https://desolate-hollows-16342.herokuapp.com/readcate")
    Axios.get("http://localhost:8080/readcate")
      .then((response) => {
        setListOfCate(response.data);
        console.log("categories inside", response.data);
      })
      .catch(() => {
        alert("Awww, it didn't work at getting data");
      });
  }, []);

  const updatePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("cateId", selectedId);
    formData.append("cateName", selected);
    formData.append("description", description);
    for (let i = 0; i < postImg.length; i++) {
      formData.append("files", postImg[i]);
    }

    await updatePosts(id, formData).then(() => {
      setEditpost({
        title: title,
        description: description,
        cateId: selectedId,
        cateName: selected,
        files: postImg,
      });
    });
  };
  console.log("after finish update", editpost.files);

  return (
    <>
      <div className="formDiv">
        <p className="updateResponse">{msg}</p>
        <form
          // onSubmit={handleEditpost}
          className="postForm"
          action=""
          method="POST"
          enctype="multipart/form-data"
        >
          <h3>Update your information</h3>
          <div className="dropdown cateflex">
            <h3 className="catechoose">Choose Category:</h3>
            <div>
              <div
                className="dropdown-btn"
                // value={editpost.cateName}
                onClick={(e) => setIsActive(!isActive)}
              >
                <option value={editpost.cateName}>
                  {selected === 0 ? editpost.cateName : selected}
                  <i class="fa-solid fa-square-caret-down"></i>
                </option>
              </div>
              {isActive && (
                <div className="dropdown-content">
                  {listOfCate.map((option) => (
                    <div
                      onClick={(e) =>
                        setSelectedId(option._id)(
                          setSelected(option.catename)(setIsActive(false))
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
            <label for="titleFormid">Title:</label>
            <textarea
              id="titleFormid"
              className="titleForm"
              placeholder="Type title here..."
              // value={editpost.title}
              rows={1}
              defaultValue={editpost.title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              required
            />
          </div>
          <div className="titleDiv">
            <label for="descformid">Description:</label>
            <textarea
              id="descformid"
              className="titleForm"
              defaultValue={editpost.description}
              placeholder="Type Description here..."
              onChange={(event) => {
                setDescription(event.target.value);
              }}
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
              defaultValue={editpost.files}
              multiple
              onChange={(event) => {
                setPostimg(event.target.files);
              }}
            />
          </div>
        </form>

        <button onClick={updatePost} type="submit" className="postButton">
          Update
        </button>
        <div className="imgShow">
          {editpost.files.map((file, index) => {
            return (
              <div className="Imgarea">
                <div className="imgDiv1">
                  {console.log("file path is", file.filePath)}
                  <img
                    src={`http://localhost:8080/${file.filePath}`}
                    height="200"
                    alt={`${file.cateName}`}
                    // src={`https://desolate-hollows-16342.herokuapp.com/${file.filePath}`}
                  />
                  <button
                    className="imgDelete"
                    // onClick={() => deleteFile(file.filePath)}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
