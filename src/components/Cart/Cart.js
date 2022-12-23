import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

import { useCart } from "react-use-cart";

function Cart(props) {
  const {
    isEmpty,
    items,
     cartTotal,
    updateItemQuantity,
    removeItem,
 
  } = useCart();

  if (isEmpty) {
    items.splice(0, items.length);
  }
  return (
    <Modal>
      <div className="cart">
        <div>
          <div className="cart-header">
            <h4>Korpa</h4>
            <button onClick={props.closeCart} className="button-header">
              Nazad
            </button>
          </div>
          <ul className="added-cart">
            {items.map((item, index) => {
              {
                return (
                  <li key={index} className="cart-item">
                    <div>
                      <img className="cart-image" src={item.img} alt="shirts" />
                    </div>
                    <div className="description-price">
                      <div className="title">
                        <h4>{item.title}</h4>
                        <button
                          className="delete-item"
                          onClick={() => removeItem(item.id)}
                        >
                          x
                        </button>
                      </div>
                      <p>{item.description}</p>

                      <span className="price">
                        {item.price * item.quantity}
                        RSD
                      </span>

                      <div className="action">
                        <button
                          className="add-buttons"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="add-buttons"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
        <div className="footer-cart">
          <div>
            <h5>Ukupno : {cartTotal} RSD</h5>
          </div>
          <button className="footer-cart-button">IDI NA KASU</button>
        </div>
    </Modal>
  );
}

export default Cart;
