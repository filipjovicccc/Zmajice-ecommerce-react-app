import React from "react";
import ShirtsList from "../components/Shirts/ShirtsList";
import { Fragment } from "react";
import { CartProvider } from "react-use-cart";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <Fragment>
      <CartProvider>
        <ShirtsList
          items={props.items}
          filterCategories={props.filterCategories}
        />
        <Link to={"page2"}>
          <button>Page 2</button>
        </Link>
      </CartProvider>
    </Fragment>
  );
}

export default Home;
