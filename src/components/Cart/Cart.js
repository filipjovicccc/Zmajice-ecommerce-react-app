import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

function Cart(props) {
  return (
    <Modal>
      <div className="total">
        <p>asdasdasdas</p>
        <span>Total Amount</span>
        {/* <span>{totalAmount}</span> */}
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        {/* {hasItems && <button className={classes.button}>Order</button>} */}
      </div>
    </Modal>
  );
}

export default Cart;
