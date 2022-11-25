import React from "react";
import "./Shirts.css";



function Shirts(props) {

 
  return (
    <article className="article">
      <img className="images" src={props.item.img} alt="shirts" />
      <div className="section">
        <p>{props.item.title}</p>
        <p>{props.item.description}</p>
        <span>{props.item.price}</span>
      </div>
    </article>
  );
}

export default Shirts;
