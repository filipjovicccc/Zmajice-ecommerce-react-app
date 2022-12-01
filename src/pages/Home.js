import React from "react";
import ShirtsList from "../components/Shirts/ShirtsList";
import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layout/Footer";
import { Fragment } from "react";
import { CartProvider } from "react-use-cart";
function Home(props) {
  return (
    <Fragment>
      <CartProvider>
        <Header openCart={props.openCartHandler} />
        {props.showIsTrue && <Cart closeCart={props.closeCartHandler} />}
        <ShirtsList items={props.items} />
        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default Home;
