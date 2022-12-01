import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

import { useCart } from "react-use-cart";

function Cart(props) {
  const {
    // isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
   
  } = useCart();

  
  {
    console.log(items);
  }
  return (
    <Modal>
      <div className="cart">
        <div className="cart-header">
          <h4>Korpa</h4>
          <button onClick={props.closeCart} className="button-header">
            Nazad
          </button>

          <ul className="added-cart">
            {items.map((item, index) => {
              return (
                <li key={index} className="cart-item">
                  <div>
                    <h5>{item.title}</h5>
                    <button onClick={() => removeItem(item.id)}>x</button>
                    <h6>{item.description}</h6>

                    <div className="summary">
                      <span className="price">
                        {item.price}
                        RSD
                      </span>
                    </div>
                    <div>
                      <img className="cart-image" src={item.img} alt="shirts" />
                    </div>
                  </div>
                  <div className="action">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>
                    <span>({item.quantity})</span>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-cart">
          <button className="footer-cart-button">IDI NA KASU</button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
