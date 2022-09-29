import Paginate from "../catepagerightbar/Paginate";
import { getMultipleFiles } from "../../data/api";
import React, { useState, useEffect } from "react";
import "../travelling/travside.css";

function ProRight() {
  const [multipleFiles, setMultipleFiles] = useState([]);

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMultipleFilesList();
  }, []);
  return (
    <>
      <div>
        <div className="lastnewbar-title">
          <h2 className="capitalize">My Posts</h2>
          <span className="lasttitleline Post-line"></span>
        </div>
        <div className="sidebar">
          <div className="Trav-main">
            {multipleFiles.map((element, index) => (
              <div key={element._id}>
                <div className="postTrav">
                  <div className="Trav_img">
                    <img
                      src={`http://localhost:8080/${element.files[0].filePath}`}
                    />
                    <p className="Travel1 cateTravel">{element.cateName}</p>
                  </div>
                  <div className="postTrav_info">
                    <h4>{element.title}</h4>
                    <p>{element.description}</p>

                    <div className="Probuttom">
                      <div className="postman">
                        <span className="DeleteP Delcolor">
                          Delete <i className=" uil uil-trash-alt"></i>
                        </span>
                      </div>
                      <div className="posticon">
                        <span className="EditPost Editcolor">
                          Edit <i className=" uil uil-edit"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Paginate /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProRight;

//  .map((element, index) => (
//               <div className="product" key={element._id}>
//                 <div className="product-img">
//                   {/* {element.files.map((file,index)=>( */}
//                   <img
//                     src={`http://localhost:8080/${element.files[0].filePath}`}
//                     className="card-img-top img-responsive "
//                     alt="img"
//                   />
//                   {/* ))} */}
//                 </div>
//                 <div className="title_desc">
//                   <h4>Title: {element.title}</h4>
//                   <h6>Descriptions: {element.desc}</h6>
//                 </div>
//               </div>
