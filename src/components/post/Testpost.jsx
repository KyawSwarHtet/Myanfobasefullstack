import React from "react";
import { useRef } from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./textform.css";

export default function Testpost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postImg, setPostimg] = useState();
  const [listOfPosts, setListOfPosts] = useState([]);
  //https://desolate-hollows-16342.herokuapp.com/addpost

  const addPost = () => {
    Axios.post("http://localhost:8080/addpost", {
      title: title,
      description: description,
    }).then((response) => {
      setListOfPosts([
        ...listOfPosts,
        { _id: response.data._id, title: title, description: description },
      ]);
    });
  };

  const updatePost = (id) => {
    const newTitle = prompt("Enter new Title:");
    const newDesc = prompt("Enter new Desc:");

    Axios.put("http://localhost:8080/update", {
      newTitle: newTitle,
      id: id,
      newDesc: newDesc,
    }).then(() => {
      setListOfPosts(
        listOfPosts.map((val) => {
          return val._id == id
            ? { _id: id, title: newTitle, description: newDesc }
            : val;
        })
      );
    });
  };

  const deletePost = (id) => {
    Axios.delete(`http://localhost:8080/delete/${id}`).then(() => {
      setListOfPosts(
        listOfPosts.filter((val) => {
          return val._id != id;
        })
      );
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/read")
      .then((response) => {
        setListOfPosts(response.data);
        // const update = prompt("enter val:");
        // console.log(update);
      })
      .catch(() => {
        alert("Awww, it didn't work");
      });
  }, []);

  return (
    <>
      <form
        className="postForm"
        action=""
        method=""
        enctype="multipart/form-data"
      >
        <div className="titleDiv">
          <h3>Title:</h3>
          <textarea
            className="titleForm"
            placeholder="Type title here..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            rows={1}
            defaultValue=""
            required
          />
        </div>
        <div className="titleDiv">
          <h3>Description:</h3>
          <textarea
            className="titleForm"
            placeholder="Type Description here..."
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            rows={1}
            defaultValue=""
            required
          />
        </div>
        <br />
        <br />
        <div className="imgDiv">
          <h3>Upload Image:</h3>
          <input type="file" multiple />
        </div>

        <button onClick={addPost} className="postButton">
          Post
        </button>
      </form>
      {listOfPosts.map((val) => {
        return (
          <div className="Dataresult">
            <h5>title is "{val.title}"</h5>
            <h5>description is " {val.description}"</h5>
            <button
              className="updatedata"
              onClick={() => {
                updatePost(val._id);
              }}
            >
              update
            </button>
            <button
              className="closedata"
              onClick={() => {
                deletePost(val._id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </>
  );
}
