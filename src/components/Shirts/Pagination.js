import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import links from "../data/linkData";
import "./Pagination.css";
import { RxChevronRight } from "react-icons/rx";
import { RxChevronLeft } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";

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
      <RxDoubleArrowLeft />
      <RxChevronLeft />
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
      <RxChevronRight />
      <RxDoubleArrowRight />
      <div className="chosen-page"></div>
    </div>
  );
}

export default Pagination;
