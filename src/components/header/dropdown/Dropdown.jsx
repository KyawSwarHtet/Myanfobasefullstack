import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DropdownItems } from "./dropdownItem";
import "./dropdown.css";

export default function Dropdown(props) {
  const user = props.user;
  const [dropdown, setDropdown] = useState(false);
  const [categories, setCategories] = useState("");
  console.log("user is", user);
  const getAlldata = async () => {
    const reqdata = await fetch(
      `https://desolate-hollows-16342.herokuapp.com/api/category`
    );
    // const reqdata = await fetch(`http://localhost:8080/api/category`);
    const res = await reqdata.json(); // JSON.parse(json);
    //   console.log("res data is ", res);
    return res;
  };
  useEffect(() => {
    getAlldata().then((data) => {
      setCategories(data);
    });
  }, []);

  // console.log("cate gorie data", categories);

  return (
    <ul
      className={dropdown ? "categoriessub clicked" : "categoriessub"}
      onClick={() => setDropdown(!dropdown)}
    >
      {categories.length !== 0 ? (
        categories.map((item) => {
          return (
            <li key={item._id} className="catgitems">
              <Link
                to={item.catename}
                className="nav-item"
                onClick={() => setDropdown(false)}
              >
                <h5>{item.catename}</h5>
              </Link>
            </li>
          );
        })
      ) : (
        <div>
          <h5>Loading...</h5>
        </div>
      )}
      {user !== null && user.isAdmin === true ? (
        <li className="catgitems">
          <Link
            to={"/addcate"}
            className="nav-item"
            onClick={() => setDropdown(false)}
          >
            <h5 className="colorRed">Add Categories</h5>
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}
