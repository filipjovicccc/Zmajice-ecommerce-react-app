import React from "react";
import "./ProductType.css";
import { useState } from "react";

function ProductType() {
  // const [toggleActive, setToggleActive] = useState(false);

  // const toggleChecked = () => {
  //   setToggleActive(toggleActive);
  // };

  return (
    <div className="products">
      <ul className="product-list">
        <h4> Tip proizvoda</h4>
        <li className="main-list">
          <input checked="checked" type="checkbox" /> Muška majica
          <span
            // onClick={toggleChecked}
            // className={`mark show`}
            className="mark"
          ></span>
        </li>
        <li className="main-list">
          {" "}
          <input checked="checked" type="checkbox" />
          <span className="mark"></span>
          Ženska majica
        </li>
        <li>
          {" "}
          <input className="products-check" type="checkbox" />
          Dečija majica - unisex
        </li>
        <li>
          {" "}
          <input className="products-check" type="checkbox" />
          Duks - unisex
        </li>
        <li>
          {" "}
          <input className="products-check" type="checkbox" />
          Duks basic - unisex
        </li>
        <li>
          {" "}
          <input className="products-check" type="checkbox" />
          Duks premium - unisex
        </li>
        <li>
          {" "}
          <input className="products-check" type="checkbox" />
          Bebi bodi kratak rukav
        </li>
        <li>
          {" "}
          <input className="products-check" type="checkbox" />
          Bebi bodi dug rukav
        </li>
        <li>
          {" "}
          <input className="products-check" type="checkbox" />
          Portika
        </li>
      </ul>
    </div>
  );
}

export default ProductType;
