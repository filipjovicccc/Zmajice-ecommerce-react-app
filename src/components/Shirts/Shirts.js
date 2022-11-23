import React from "react";
import "./Shirts.css";

function Shirts(props) {
  return (
    <article className="article">
      <img className="images" src={props.item.img} alt="shirts" />
      <div className="section">
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
        <span>{props.item.price}</span>
      </div>
    </article>
  );
}

export default Shirts;
