import { Link } from "react-router-dom";
import "./search.css";

const Search = () => {
  return (
    <>
      <div className="searchpage">
        <input type="text" placeholder="" id="searchinputpage" />
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
    </>
  );
};

export default Search;
