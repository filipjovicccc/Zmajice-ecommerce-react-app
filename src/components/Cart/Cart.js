import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const { products, setProducts } = useContext(CartContext);

  const newItemId = products.map((item) => item.paramId)[0];

  const cartProducts = [products.find((i) => i.id == newItemId)];



  return (
    <Modal>
      <div className="cart">
        <div className="cart-header">
          <h4>Korpa</h4>
          <button onClick={props.closeCart} className="button-header">
            Nazad
          </button>
      
          <ul className="added-cart">
            {cartProducts.map((item) => (
              <CartItem key={item.id} id={item.id} item={item} />
            ))}
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
