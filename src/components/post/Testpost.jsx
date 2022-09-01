import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./textform.css";
import "./dropdowncate.css";


export default function Testpost() {
  const [selected, setSelected] = useState("Choose One");
  const [selectedId, setSelectedId] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postImg, setPostimg] = useState();

  const [listOfPosts, setListOfPosts] = useState([]);

  const [listOfCate, setListOfCate] = useState([]);

  const addPost = () => {
    Axios.post("https://desolate-hollows-16342.herokuapp.com/addpost", {
      //https://desolate-hollows-16342.herokuapp.com
      cateId: selectedId,
      cateName: selected,
      title: title,
      description: description,
    }).then((response) => {
      // if (response.data.selectedId == "0") {
      //   prompt("here you dat is equal 0");
      // }
      // alert("hello it is working");
      setListOfPosts([
        ...listOfPosts,
        {
          _id: response.data._id,
          cateId: selectedId,
          cateName: selected,
          title: title,
          description: description,
        },
      ]);
    });
  };

  const updatePost = (id) => {
    const newTitle = prompt("Enter new Title:");
    const newDesc = prompt("Enter new Desc:");

    Axios.put("https://desolate-hollows-16342.herokuapp.com/update", {
      newTitle: newTitle,
      id: id,
      newDesc: newDesc,
      // cateId: cateId,
      // cateName: cateName,
    }).then(() => {
      setListOfPosts(
        listOfPosts.map((val) => {
          return val._id === id
            ? {
                _id: id,
                title: newTitle,
                description: newDesc,
                cateId: val.cateId,
                cateName: val.cateName,
              }
            : val;
        })
      );
    });
  };

  const deletePost = (id) => {
    Axios.delete(
      `https://desolate-hollows-16342.herokuapp.com/delete/${id}`
    ).then(() => {
      setListOfPosts(
        listOfPosts.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };

  useEffect(() => {
    Axios.get("https://desolate-hollows-16342.herokuapp.com/read")
      .then((response) => {
        setListOfPosts(response.data);
        // const update = prompt("enter val:");
        // console.log(update);
      })
      .catch(() => {
        alert("Awww, it didn't work at getting data");
      });
  }, []);

  useEffect(() => {
    Axios.get("https://desolate-hollows-16342.herokuapp.com/readcate")
      .then((response) => {
        setListOfCate(response.data);
        console.log("categories inside", response.data);
      })
      .catch(() => {
        alert("Awww, it didn't work at getting data");
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
                {/* {listOfCate.map((data) => {
              console.log("data of listCate are", data.catename);
            })} */}
              </div>
            )}
          </div>
        </div>

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
      </form>

      <button onClick={addPost} className="postButton">
        Post
      </button>
      {listOfPosts.map((val) => {
        return (
          <div className="Dataresult">
            <h5>title is "{val.title}"</h5>
            <h5>description is " {val.description}"</h5>
            <h5>Selected category is " {val.cateName}"</h5>
            <h5>selected id is " {val.cateId}"</h5>
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
