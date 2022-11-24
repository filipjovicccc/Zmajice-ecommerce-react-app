import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

function Cart(props) {
  return (
    <Modal>
      <div className="cart">
        <div className="cart-header">
          <h4>Korpa</h4>
          <button onClick={props.closeCart} className="button-header">
            Nazad
          </button>
        </div>
        <div className="footer-cart">
          <p>Cena: 1499 RSD</p>
          <p>Standardna isporuka: 350 RSD</p>
          <p id="bold">Ukupno: 1849 RSD</p>
          <button className="footer-cart-button">IDI NA KASU</button>
        </div>
      </div>

      {/* <div className="total">
        <p>asdasdasdas</p>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div> */}
      {/* <div className="actions">
        {hasItems && <button className={classes.button}>Order</button>}
      </div> */}
    </Modal>
  );
}

export default Cart;
