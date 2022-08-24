import React from "react";
import "./paginate.css";
import ReactPaginate from "react-paginate";
export default function Paginate() {
  const handlePageClick = (data) => {
    console.log(data.selected);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
      />
    </div>
  );
}
