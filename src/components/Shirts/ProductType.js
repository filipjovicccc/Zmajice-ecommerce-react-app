import React from "react";
import "./ProductType.css";

function ProductType({ items, filteredProducts }) {
  return (
    <div className="products">
      <ul className="product-list">
        <h4> Tip proizvoda</h4>
        {items.map((item) => {
          return (
            <li>
              <label
                onClick={() => filteredProducts(item.description)}
                className="main"
              >
                {item.description}
                <input type="checkbox" />
                <span className="geekmark"></span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductType;
