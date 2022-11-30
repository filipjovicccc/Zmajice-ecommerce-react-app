import React from "react";

const CartContext = React.createContext({
  products: [],
  setProducts: () => {},
});

export default CartContext;
