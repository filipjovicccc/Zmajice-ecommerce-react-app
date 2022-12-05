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
    
        className={`link ${!toggleActiveButton ? "" : "active"}`}
      >
        1
      </Link>

      <Link
        onClick={activeButton}
        className={`link ${!toggleActiveButton ? "" : "active"}`}
      >
        2
      </Link>
      <Link
        onClick={activeButton}
        className={`link ${!toggleActiveButton ? "" : "active"}`}
      >
        3
      </Link>
      <Link
        onClick={activeButton}
        className={`link ${!toggleActiveButton ? "" : "active"}`}
      >
        4
      </Link>
      <Link
        onClick={activeButton}
        className={`link ${!toggleActiveButton ? "" : "active"}`}
      >
        5
      </Link>
      <Link
        onClick={activeButton}
        className={`link ${!toggleActiveButton ? "" : "active"}`}
      >
        6
      </Link>
      <Link>&raquo;</Link>
    </div>
  );
}

export default Pagination;
