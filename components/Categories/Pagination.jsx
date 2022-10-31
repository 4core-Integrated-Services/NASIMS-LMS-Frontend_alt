import React from "react";

function Pagination() {
  return (
    <div className="post-pagination paginationCLASS">
      <a href="#">
        <i className="fa fa-angle-double-left"></i>
      </a>
      <a className="active" href="#">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">
        <i className="fa fa-angle-double-right"></i>
      </a>
    </div>
  );
}

export default Pagination;
