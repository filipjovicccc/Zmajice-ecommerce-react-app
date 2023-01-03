import React from "react";
import "./ProductType.css";


function ProductType({ items, filteredProducts }) {

  const filteredProductsType = items.map(item => item === item.description)
  console.log(filteredProductsType)
  return (
    <div className="products">
      <ul className="product-list">
        <h4> Tip proizvoda</h4>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <label
                onClick={() => filteredProducts(filteredProductsType)}
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
