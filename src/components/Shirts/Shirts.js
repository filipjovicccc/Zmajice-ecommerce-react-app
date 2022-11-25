import React from "react";
import "./Shirts.css";
import { Link } from "react-router-dom";

function Shirts(props) {
  const toProducts = (e) => {
    console.log(e.target.value);
  };
  return (
    <article className="article">
      {props.item.naPopustu && <div className="discount">Na popustu</div>}
      <Link image={props.item.img} to="/product">
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
