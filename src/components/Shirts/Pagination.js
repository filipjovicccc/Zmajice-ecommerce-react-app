import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import links from "../data/linkData";

function Pagination() {
  const [usingLinks, setUsingLinks] = useState(links);

  const activeButton = (id) => {
    setUsingLinks(
      usingLinks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      })
    );
  };

  return (
    <div className="pagination">
      {usingLinks.map((item) => {
        return (
          <Link
            key={item.id}
            id={item.id}
            onClick={() => activeButton(item.id)}
            className={`link ${item.active ? "active" : ""}`}
            to={`page${item.name}`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Pagination;
