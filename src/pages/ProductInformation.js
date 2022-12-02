import React from "react";
import { useContext } from "react";
import { productContext } from "../store/product-context";
import { useParams } from "react-router-dom";
import Products from "../components/Products/Products";

function ProductInformation(props) {
  const { items, setItems } = useContext(productContext);
  const { id } = useParams();

  const findItem = [items.find((i) => i.id == id)];

  return (
    <div>
      <div>
        {findItem.map((item) => {
          return (
            <Products
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.description}
              price={item.price}
              img={item.img}
              item={item}
              quantity={item.quantity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductInformation;
