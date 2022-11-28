import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="added-cart">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          img={item.img}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      <div className="cart">
        <div className="cart-header">
          <h4>Korpa</h4>
          <button onClick={props.closeCart} className="button-header">
            Nazad
          </button>
          {cartItems}
        </div>
        <div className="footer-cart">
          <p id="bold">{totalAmount}</p>
          <button className="footer-cart-button">IDI NA KASU</button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
