import React, { useContext } from "react";
import "./Shirts.css";
import { Link } from "react-router-dom";
import { productContext } from "../../store/product-context";
import CartContext from "../../store/cart-context";

function Shirts(props) {
  const { items, setItems } = useContext(productContext);
  const cartCtx = useContext(CartContext);

  // const toProducts = (e) => {

  // const changeCurrent = {
  //   ...props.item,
  //   isClicked: !props.item.isClicked,
  // };
  // props.setItems((prevItems) => {
  //   const itemWithoutCurrent = prevItems.map((item) => {
  //     if (item.id === props.item.id) {
  //       return changeCurrent;
  //     }
  //     return item;
  //   });
  //   return itemWithoutCurrent;
  // });
  // };
  // const addToCartHandler = () => {
  //   cartCtx.addItem({
  //     id: props.item.id,
  //     title: props.item.title,
  //     description: props.item.description,
  //     price: props.item.price,
  //     isClicked: props.item.isClicked,
  //     img: props.item.img,
  //   });
  // };

  const toProducts = () => {
    const newItems = [
      ...items,
      {
        id: props.item.id,
        img: props.item.img,
        title: props.item.title,
        description: props.item.description,
        price: props.item.price,
        isClicked: props.item.isClicked,
      },
    ];

    setItems(newItems);
    // props.onAddToCart(newItems);
  };

  return (
    <article className="article">
      {props.item.naPopustu && <div className="discount">Na popustu</div>}
      <Link to={`/product/${props.item.id}`}>
        <img
          onClick={toProducts}
          className="images"
          src={props.item.img}
          alt="shirts"
        />
      </Link>
      ;
      <div className="section">
        <p>{props.item.title}</p>
        <p>{props.item.description}</p>
        <span>{props.item.price}</span>
      </div>
    </article>
  );
}

export default Shirts;
