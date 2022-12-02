import React from "react";

import { Fragment } from "react";
import { useCart } from "react-use-cart";
import "./Product.css";

function Products(props) {
  const { addItem } = useCart();
  return (
    <Fragment>
      <div className="product">
        <div className="overflow">
          <img className="product-image" src={props.img} alt="shirts" />
        </div>
        <div className="product-information">
          <h1>{props.title}</h1>
          <h4>{props.price}</h4>
          <h5>{props.desc}</h5>
          {props.quantity}
          <h5>BOJA</h5>
          <h5>
            VELIČINA{" "}
            <span className="product-size">Kako odabrati veličinu?</span>
            <div className="product-wraper">
              <div className="product-box">XS</div>
              <div className="product-box">S</div>
              <div className="product-box">M</div>
              <div className="product-box">L</div>
              <div className="product-box">XL</div>
              <div className="product-box">2XL</div>
              <div className="product-box">3XL</div>
            </div>
            <button
              onClick={() => addItem(props.item, props.quantity + 1)}
              className="product-button"
            >
              DODAJ U KORPU
            </button>
          </h5>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
