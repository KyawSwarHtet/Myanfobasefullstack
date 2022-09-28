import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Testpost from "./Testpost";
import { getMultipleFiles, deletePosts } from "../../data/api";
import "./textform.css";
import "./dropdowncate.css";
import "./postform.css";
import { useParams } from "react-router-dom";

export default function Postform() {
  const [listofPost, setListofPost] = useState([]);
  const [editpost, setEditpost] = useState({
    title: "",
    description: "",
    cateName: "",
    cateId: "",
    files: [],
  });

  const [id, setId] = useState();

  const [imgfile, setimgfile] = useState([]);

  const getmultipleFilesList = async () => {
    try {
      const filelist = await getMultipleFiles();
      setListofPost(filelist);
      console.log("list of post is", listofPost);
    } catch (error) {
      alert("Awww, it didn't work at getting data");
    }
  };
  useEffect(() => {
    getmultipleFilesList();
  }, []);

  // useEffect(() => {
  //   const editpostid = async () => {
  //     const reqdata = await fetch(`http://localhost:8080/editpost/${id}`);
  //     const res = await reqdata.json(); // JSON.parse(json);
  //     setEditpost(await res);
  //   };
  //   editpostid();
  // }, []);

  const deletePost = (id) => {
    deletePosts(id)
      // Axios.delete(
      // `https://desolate-hollows-16342.herokuapp.com/delete/${id}`
      // `http://localhost:8080/delete/${id}`
      .then(() => {
        setListofPost(
          listofPost.filter((val) => {
            return val._id !== id;
          })
        );
      });
  };

  return (
    <>
      <section className="postbg">
        <div className="container firstdesc">
          <h2 className="capitalize">
            Let's share your experience and knowledge on our website!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            corporis consequuntur harum ab minima et, necessitatibus sit
            blanditiis a at tempore unde eius minus veritatis odit aliquid
            consequatur accusantium eum.
          </p>
        </div>
      </section>
      <div className="container formBody">
        <div>
          <Testpost getMultipleFile={() => getmultipleFilesList()} />
        </div>

        <div className="dataShow">
          {listofPost.map((val, index) => {
            return (
              <>
                <div className="Dataresult" key={val._id}>
                  <div className="textLeft">
                    <h5>title is "{val.title}"</h5>
                    <h5>description is " {val.description}"</h5>
                    <h5>Selected category is " {val.cateName}"</h5>
                    <h5>selected id is " {val.cateId}"</h5>

                    <Link to={`/update/${val._id}`}>
                      <button className="updatedata">update</button>
                    </Link>

                    <button
                      className="closedata"
                      onClick={() => {
                        deletePost(val._id);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <div className="ImgareaDiv">
                    {val.files.map((file, index) => {
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
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
