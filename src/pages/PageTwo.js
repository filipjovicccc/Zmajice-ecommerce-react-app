import React from "react";
import ShirtsList from "../components/Shirts/ShirtsList";
import { Fragment } from "react";
import { CartProvider } from "react-use-cart";
function PageTwo(props) {
  return (
    <Fragment>
      <CartProvider>
        <ShirtsList items={props.items} />
      </CartProvider>
    </Fragment>
  );
}

export default PageTwo;
