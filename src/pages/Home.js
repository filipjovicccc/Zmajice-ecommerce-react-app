import React from "react";
import ShirtsList from "../components/Shirts/ShirtsList";
import Header from "../components/Layout/Header";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layout/Footer";
import { useParams } from "react-router-dom";
function Home(props) {

  return (
    <div>
      <Header openCart={props.openCartHandler} />
      {props.showIsTrue && <Cart closeCart={props.closeCartHandler} />}
      <ShirtsList items={props.items} />
      <Footer />
    </div>
  );
}

export default Home;
