import React, { useState, useEffect, useRef } from "react";
import { Addcategory, getCategory } from "../../data/api";
import "./addcategories.css";
export default function AddCategoriesPage() {
  const [categories, setCategories] = useState("");
  const category = useRef(null);
  const [count, setCount] = useState(0);

  const AddCategory = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
    const catename = { catename: category.current.value };

    Addcategory(catename);
    category.current.value = "";
  };

  const getAlldata = async () => {
    const reqdata = await fetch(`http://localhost:8080/api/category`);
    const res = await reqdata.json(); // JSON.parse(json);
    //   console.log("res data is ", res);
    return res;
  };
  useEffect(() => {
    getAlldata().then((data) => {
      setCategories(data);
    });
  }, [count]);

  return (
    <div className="enterCate gridCate ">
      <ul className="cateUl">
        {categories.length !== 0 ? (
          categories.map((data) => {
            return <li className="titlecategory">{data.catename}</li>;
          })
        ) : (
          <div>
            <h4>Loading...</h4>
          </div>
        )}
      </ul>
      <div className="secondDivcate">
        <div className="labelCate">
          <label htmlFor="category" className="label1">
            Add New Category :
          </label>
          <input
            id="category"
            type="text"
            className="inputCate"
            placeholder="Type category here ..."
            name="category"
            ref={category}
            rows={1}
            required
          />
        </div>
        <button className="editbutton btnalign" onClick={AddCategory}>
          Add Category
        </button>
      </div>
    </div>
  );
}
