// import React from "react";
// import "./paginate.css";
// import ReactPaginate from "react-paginate";
// export default function Paginate() {
//   const handlePageClick = (data) => {
//     console.log(data.selected);
//   };
//   return (
//     <div>
//       <ReactPaginate
//         previousLabel={"<<"}
//         nextLabel={">>"}
//         pageCount={5}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination"}
//         pageClassName={"page-item"}
//         pageLinkClassName={"page-link"}
//         previousClassName={"page-item"}
//         previousLinkClassName={"page-link"}
//         nextClassName={"page-item"}
//         nextLinkClassName={"page-link"}
//       />
//     </div>
//   );
// }
import { Box, Pagination } from "@mui/material";
const pageSize = 3;
export default function Paginate() {
  return (
    <Box
      justifyContent={"center"}
      alignItems="center"
      display={"flex"}
      sx={{
        margin: "20px 0px",
      }}
    >
      <Pagination count={10} color="primary" variant="outlined"></Pagination>
    </Box>
  );
}
