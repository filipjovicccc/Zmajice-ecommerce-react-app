import React from "react";
import { useContext } from "react";
import { productContext } from "../store/product-context";
import { useParams } from "react-router-dom";
import Products from "../components/Products/Products";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function ProductInformation(props) {
  const { items, setItems } = useContext(productContext);
  const { id } = useParams();
  const products = [items.find((i) => i.id == id)];

  return (
    <div>
      <Header />
      <div>
        {products.map((item) => {
          return (
            <Products paramId={id} key={item.id} id={item.id} item={item} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ProductInformation;
