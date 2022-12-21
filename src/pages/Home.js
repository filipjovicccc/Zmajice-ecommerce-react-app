import React from "react";
import ShirtsList from "../components/Shirts/ShirtsList";
import { Fragment } from "react";
import { CartProvider } from "react-use-cart";

function Home(props) {
  return (
    <Fragment>
      <CartProvider>
        <ShirtsList
          items={props.items}
          filterCategories={props.filterCategories}
          filteredProducts={props.filteredProducts}
          productStyle={props.productStyle}
        />
      </CartProvider>
    </Fragment>
  );
}

export default Home;
