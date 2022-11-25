import React from "react";

function ProductInformation(props) {
  return (
    <div>
      <h1>HELLO FROM PRODUCTS INFORMATION</h1>
      <div>{props.image}</div>
    </div>
  );
}

export default ProductInformation;
