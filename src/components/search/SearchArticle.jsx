import "./search.css";
import { Link } from "react-router-dom";
import Paginate from "../catepagerightbar/Paginate";
import { getMultipleFiles } from "../../data/api";

import "../post/postform.css";
import "../post/textform.css";
import React, { useState, useEffect } from "react";

function SearchArticle() {
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  // const findOneByimage = function (image, done) {
  //   file.findOne({ files: { $all: [image] } }, (error, result) => {
  //     if (error) {
  //       console.log(error)
  //     } else {
  //       done(null, result)
  //     }
  //   })
  // };

  return (
    <>
      <div className="searchpage">
        <input
          type="text"
          placeholder=""
          id="searchinputpage"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Link to="./search" className="searchbutton">
          <i className="uil uil-search"></i>
        </Link>

        <div className="vartdiv">
          <span className="varticalline"></span>
        </div>
        <div className="textinsearchdiv">
          <p className="textinsearch">Search</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="searchbox container ">
          {multipleFiles
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })

            .map((element, index) => (
              <div className="product" key={element._id}>
                <div className="product-img">
                  {/* {element.files.map((file,index)=>( */}
                  <img
                    src={`https://desolate-hollows-16342.herokuapp.com/${element.files[0].filePath}`}
                    // src={`http://localhost:8080/${element.files[0].filePath}`}
                    className="card-img-top img-responsive "
                    alt="img"
                  />
                  {/* ))} */}
                </div>
                <div className="title_desc">
                  <h4>Title: {element.title}</h4>
                  <h6>Descriptions: {element.description}</h6>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default SearchArticle;

// export default function SearchArticle() {
//   return (

//     <section className="container">
//       <div className="searcharticle-maindiv">
//         <div className="search-article1">
//           <div className="search-buttonimg">
//             <div className="search-img1">
//               <img src="../images/homeimgs/tecmustread1.jpg" alt="" />
//             </div>
//             <Link
//               to="/technology"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article2">
//           <div className="search-buttonimg">
//             <div className="search-img2">
//               <img src="../images/homeimgs/tecmustread2.jpg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateBeauty "
//             >
//               Beauty
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article3">
//           <div className="search-buttonimg">
//             <div className="search-img3">
//               <img src="../images/homeimgs/tecmustread3.jpg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article4">
//           <div className="search-buttonimg">
//             <div className="search-img4">
//               <img src="../images/homeimgs/tecmustread4.jpg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article5">
//           <div className="search-buttonimg">
//             <div className="search-img5">
//               <img src="../images/technology/computer1.jpeg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article6">
//           <div className="search-buttonimg">
//             <div className="search-img6">
//               <img src="../images/technology/techcamera.jpg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article7">
//           <div className="search-buttonimg">
//             <div className="search-img7">
//               <img src="../images/technology/earphone.jpeg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article8">
//           <div className="search-buttonimg">
//             <div className="search-img8">
//               <img src="../images/technology/phone1.jpeg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//       </div>
//       <div className="searchpagenext">
//         <Paginate />
//       </div>
//     </section>
//   );
// }
