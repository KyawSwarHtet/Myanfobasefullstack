import React, { useState, useEffect, useRef } from "react";
import { Addcategory, getCategory } from "../../data/api";
import { useSelector, useDispatch } from "react-redux";
import "./addcategories.css";
import {
  createCate,
  deleteCate,
  getCate,
} from "../../features/categories/categorySlice";
export default function AddCategoriesPage() {
  const category = useRef(null);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const AddCategory = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
    const catename = { catename: category.current.value };

    // Addcategory(catename);
    dispatch(createCate(catename));
    category.current.value = "";
  };

  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCate());
  }, [count]);

  return (
    <div className="enterCate gridCate ">
      <ul className="cateUl">
        {categories && categories.length !== 0 ? (
          categories.map((data) => {
            return (
              <div className="cateList">
                <li className="titlecategory">{data.catename}</li>
                <button
                  className="removeBtn"
                  onClick={() => dispatch(deleteCate(data))}
                >
                  Remove
                </button>
              </div>
            );
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
