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
        return {
          ...item,
          active: item.id === id,
        };
      })
    );
  };


  return (
    <div className="pagination">
      <div className="pagination-left">
        {usingLinks.map((item) => {
          if (item.active === true) {
            return (
              <div key={item.id}>
                {item.name} od {usingLinks.length}
              </div>
            );
          }
        })}
      </div>

      <RxDoubleArrowLeft className="pagination-icons" />
      <RxChevronLeft className="pagination-icons" />
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

      <RxChevronRight
      
        className="pagination-icons"
      />
      <RxDoubleArrowRight className="pagination-icons" />

      <div className="pagination-numbers">
        {usingLinks.map((item) => {
          if (item.active === true) {
            return <div key={item.id}>{item.name}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default Pagination;
