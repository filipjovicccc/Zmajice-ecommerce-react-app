import React from "react";
import "./ProductType.css";

function ProductType() {
  return (
    <div className="products">
      <ul className="product-list">
        <h4> Tip proizvoda</h4>
        <li>
          <label 
          // onClick={filteredProducts("Muška majica")} 
          class="main">
            Muška majica
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
        <li>
          <label 
          // onClick={filteredProducts("Žensla majica")} 
          class="main">
            Ženska majica
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
        <li>
          <label
            // onClick={filteredProducts("Dečija majica - unisex")}
            className="main"
          >
            Dečija majica - unisex
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
        <li>
          <label 
          // onClick={filteredProducts("Duks - unisex")} 
          class="main">
            Duks - unisex
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
        <li>
          <label 
          // onClick={filteredProducts("Duks basic - unisex")} 
          class="main">
            Duks basic - unisex
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
        <li>
          <label
            // onClick={filteredProducts("Duks premium - unisex")}
            class="main"
          >
            Duks premium - unisex
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
        <li>
          <label
            // onClick={filteredProducts("Bebi bodi kratak rukav")}
            className="main"
          >
            Bebi bodi kratak rukav
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
        <li>
          <label
          //  onClick={filteredProducts("Bebi bodi dug rukav")} 
          class="main">
            Bebi bodi dug rukav
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
        <li>
          <label
          //  onClick={filteredProducts("Portika")}
           class="main">
            Portika
            <input type="checkbox" />
            <span className="geekmark"></span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default ProductType;
