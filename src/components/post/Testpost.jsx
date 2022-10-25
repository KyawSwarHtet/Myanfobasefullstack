import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./textform.css";
import "./postform.css";
import "./dropdowncate.css";
import { multipleFilesUpload } from "../../data/api";
import { createPost } from "../../features/posts/postSlice";

export default function Testpost(props) {
  const [selected, setSelected] = useState("Choose One");
  // console.log("selected data is", selected);
  const [selectedId, setSelectedId] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postImg, setPostimg] = useState([]);
  const [listOfCate, setListOfCate] = useState([]);

  const dispatch = useDispatch();

  const addPost = async () => {
    if (
      postImg === [] ||
      postImg.length === 0 ||
      description.length === 0 ||
      selectedId == 0 ||
      title.length == 0
    ) {
      return alert("please fill all data");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("cateId", selectedId);
    formData.append("cateName", selected);
    formData.append("description", description);
    for (let i = 0; i < postImg.length; i++) {
      formData.append("files", postImg[i]);
    }
    setTitle("");
    setDescription("");
    setPostimg("");
    setSelectedId(0);
    setSelected("Choose One");

    console.log("Form data from post is", formData);
    dispatch(createPost(formData));

    // await multipleFilesUpload(formData);
    // props.getMultipleFile();
  };
  //   Axios.post("https://desolate-hollows-16342.herokuapp.com/addpost", {
  //     //https://desolate-hollows-16342.herokuapp.com
  //     cateId: selectedId,
  //     cateName: selected,
  //     title: title,
  //     description: description,
  //     postImg: postImg,
  //   }).then((response) => {
  //     setListOfPosts([
  //       ...listOfPosts,
  //       {
  //         _id: response.data._id,
  //         cateId: selectedId,
  //         cateName: selected,
  //         title: title,
  //         description: description,
  //         postImg: postImg,
  //       },
  //     ]);
  //   });
  // };

  // const updatePost = (id) => {
  //   const newTitle = prompt("Enter new Title:");
  //   const newDesc = prompt("Enter new Desc:");

  //   Axios.put("https://desolate-hollows-16342.herokuapp.com/update", {
  //     newTitle: newTitle,
  //     id: id,
  //     newDesc: newDesc,
  //     // cateId: cateId,
  //     // cateName: cateName,
  //   }).then(() => {
  //     setListOfPosts(
  //       listOfPosts.map((val) => {
  //         return val._id === id
  //           ? {
  //               _id: id,
  //               title: newTitle,
  //               description: newDesc,
  //               cateId: val.cateId,
  //               cateName: val.cateName,
  //             }
  //           : val;
  //       })
  //     );
  //   });
  // };

  // const deletePost = (id) => {
  //   Axios.delete(
  //     `https://desolate-hollows-16342.herokuapp.com/delete/${id}`
  //   ).then(() => {
  //     setListOfPosts(
  //       listOfPosts.filter((val) => {
  //         return val._id !== id;
  //       })
  //     );
  //   });
  // };

  // useEffect(() => {
  //   Axios.get("https://desolate-hollows-16342.herokuapp.com/read")
  //     .then((response) => {
  //       setListOfPosts(response.data);
  //       // const update = prompt("enter val:");
  //       // console.log(update);
  //     })
  //     .catch(() => {
  //       alert("Awww, it didn't work at getting data");
  //     });
  // }, []);

  useEffect(() => {
    // Axios.get("https://desolate-hollows-16342.herokuapp.com/readcate")
    Axios.get("http://localhost:8080/readcate")
      .then((response) => {
        setListOfCate(response.data);
        console.log("categories inside", response.data);
      })
      .catch(() => {
        alert("Awww, it didn't work at getting categories data");
      });
  }, []);

  return (
    <div className="formDiv">
      <form
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
              {selected}
              <i class="fa-solid fa-square-caret-down"></i>
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
          <label htmlFor="titleFormid" className="labelDes">
            Title:
          </label>
          <textarea
            id="titleFormid"
            className="titleForm textdesign"
            placeholder="Type title here..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
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
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            rows={1}
            value={description}
            required
          />
        </div>
        <br />
        <br />
        <div className="imgDiv">
          <label className="labelimg">Upload Image:</label>
          <input
            type="file"
            multiple
            onChange={(event) => {
              setPostimg(event.target.files);
            }}
          />
          {console.log("daat a falult is ", selectedId)}
        </div>
      </form>

      <button onClick={addPost} className="postButton">
        Post
      </button>
    </div>
  );
}
