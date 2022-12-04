import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Pagination() {
  const [toggleActiveButton, setToggleActiveButton] = useState(false);
  const activeButton = () => {
    setToggleActiveButton(true);
  };

  return (
    <div className="pagination">
      <p>&laquo;</p>
      <Link
        onClick={activeButton}
        className={`link.${"active" && toggleActiveButton}`}
        to={"/"}
      >
        1
      </Link>

      <Link className={`link ${"link" ? "link.active" : toggleActiveButton}`}>
        2
      </Link>
      <Link className={`link ${"link" ? "link.active" : toggleActiveButton}`}>
        3
      </Link>
      <Link className={`link ${"link" ? "link.active" : toggleActiveButton}`}>
        4
      </Link>
      <Link className={`link ${"link" ? "link.active" : toggleActiveButton}`}>
        5
      </Link>
      <Link className={`link ${"link" ? "link.active" : toggleActiveButton}`}>
        6
      </Link>
      <Link>&raquo;</Link>
    </div>
  );
}

export default Pagination;
