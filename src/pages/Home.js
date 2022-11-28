import React from "react";
import ShirtsList from "../components/Shirts/ShirtsList";
import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layout/Footer";
function Home(props) {
  return (
    <div>
      <Header openCart={props.openCartHandler} />
      {props.showIsTrue && <Cart closeCart={props.closeCartHandler} />}
      <ShirtsList 
      // onAddToCart={props.onAddToCart}
       items={props.items} />
      <Footer />
    </div>
  );
}

export default Home;
