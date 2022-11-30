import React from "react";
import {  useContext } from "react";
import { Fragment } from "react";
import "./Product.css";

import CartContext from "../../store/cart-context";

function Products(props) {
  const { products, setProducts } = useContext(CartContext);



  const addToCart = (item) => {
    setProducts(() => {
      return [item];
    });
  };

  const saveDataHandler = (e) => {
    e.preventDefault();
    const saveData = {
      img: props.item.img,
      paramId: props.paramId,
      title: props.item.title,
      price: props.item.price,
      description: props.item.description,
      id: props.item.id,
    };
    addToCart(saveData);
  };
  return (
    <Fragment>
      <div className="product">
        <div className="overflow">
          <img className="product-image" src={props.item.img} alt="shirts" />
        </div>
        <div className="product-information">
          <h1>{props.item.title}</h1>
          <h4>{props.item.price}RSD</h4>
          <h5>{props.item.description}</h5>
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
            <button onClick={saveDataHandler} className="product-button">
              DODAJ U KORPU
            </button>
          </h5>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
