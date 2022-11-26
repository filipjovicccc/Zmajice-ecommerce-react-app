import React from "react";
import { useState } from "react";
import { Fragment } from "react";

function Products(props) {
  // const [showShirts, setShowShirts] = useState(false);
  // if (props.item.isClicked) {
  //   setShowShirts(true);
  // }
  return (
    <Fragment>
      (
      <div>
        <img src={props.item.img} alt="shirts" />
        <h4>{props.item.title}</h4>
        <h5>{props.item.description}</h5>
        <p>{props.item.price}</p>
      </div>
      )
    </Fragment>
  );
}

export default Products;
