import React, { useContext } from "react";
import "./Shirts.css";
import { Link } from "react-router-dom";
import { productContext } from "../../store/product-context";

function Shirts(props) {
  const { items, setItems } = useContext(productContext);
  const toProducts = () => {
    const changeCurrent = {
      ...props.item,
      isClicked: !props.item.isClicked,
    };
    props.setItems((prevItems) => {
      const itemWithoutCurrent = prevItems.map((item) => {
        if (item.id === props.item.id) {
          return changeCurrent;
        }
        return item;
      });
      return itemWithoutCurrent;
    });
  };

  // const toProducts = () => {
  //   setItems([
  //     ...items,
  //     {
  //       id: props.item.id,
  //       img: props.item.img,
  //       title: props.item.img,
  //       description: props.item.description,
  //       price: props.item.price,
  //     },
  //   ]);
  // };

  return (
    <article className="article">
      {props.item.naPopustu && <div className="discount">Na popustu</div>}
      <Link onClick={toProducts} to="/product">
        <img className="images" src={props.item.img} alt="shirts" />
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
