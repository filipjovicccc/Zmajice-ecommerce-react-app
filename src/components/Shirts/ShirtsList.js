import React from "react";
import Shirts from "./Shirts";
import "./ShirtsList.css";
import ProductType from "./ProductType";
import Kategories from "./Kategories";
import { useState } from "react";

function ShirtsList(props) {
  // const [bold, setBold] = useState(false);
  // console.log(props.items.title);
  return (
    <div className="wrapper">
      <div className="product-section">
        <ProductType />

        <Kategories
          productStyle={props.productStyle}
          filterCategories={props.filterCategories}
          // bold={bold}
        />
      </div>
      <div className="shirt-list">
        {props.items.map((item) => {
          return <Shirts key={item.id} id={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default ShirtsList;
