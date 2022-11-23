import React from "react";
import Shirts from "./Shirts";
import "./ShirtsList.css";

function ShirtsList(props) {
  return (
    <div className="shirt-list">
      {props.items.map((item) => {
        return <Shirts key={item.id} id={item.id} item={item} />;
      })}
    </div>
  );
}

export default ShirtsList;
