import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import links from "../data/linkData";

function Pagination() {
  const [activeLinks, setActiveLinks] = useState(links);

  const activeButton = (id) => {
    setActiveLinks(
      activeLinks.map((item) => {
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
      {activeLinks.map((item) => {
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
