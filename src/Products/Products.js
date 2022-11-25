import React from "react";

function Products(props) {
  return (
    <div>
      <img src={props.item.img} alt="shirts" />
      <h4>{props.item.title}</h4>
      <h5>{props.item.description}</h5>
      <p>{props.item.price}</p>
    </div>
  );
}

export default Products;
