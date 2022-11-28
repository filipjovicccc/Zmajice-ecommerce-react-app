import React from "react";
import { useContext } from "react";
import { productContext } from "../store/product-context";
import Products from "../components/Products/Products";

function ProductInformation(props) {
  const { items, setItems } = useContext(productContext);

  // const getProducts = (item) => {
  //   const filteredItems = item.filter((item) => item.isClicked === true);

  //   return filteredItems;
  // };

  return (
    <div>
      <h1>HELLO FROM PRODUCTS INFORMATION</h1>
      <div>
        {items.map((item) => {
          return <Products key={item.id} id={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default ProductInformation;
