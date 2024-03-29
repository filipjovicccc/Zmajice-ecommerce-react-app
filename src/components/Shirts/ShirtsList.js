import React from "react";
import Shirts from "./Shirts";
import "./ShirtsList.css";
import ProductType from "./ProductType";
import Kategories from "./Kategories";

function ShirtsList(props) {
  return (
    <div className="wrapper">
      <div className="product-section">
        <ProductType
          items={props.items}
          filteredProducts={props.filteredProducts}
        />

        <Kategories
          filterCategories={props.filterCategories}
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
