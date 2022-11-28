import React from "react";
import Shirts from "./Shirts";
import "./ShirtsList.css";
import ProductType from "./ProductType";
import Kategories from "./Kategories";

function ShirtsList(props) {
  return (
    <div className="wrapper">
      <div className="product-section">
        <ProductType />
        <Kategories />
      </div>
      <div className="shirt-list">
        {props.items.map((item) => {
          return (
            <Shirts
              // onAddToCart={props.onAddToCart}
              key={item.id}
              id={item.id}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShirtsList;
