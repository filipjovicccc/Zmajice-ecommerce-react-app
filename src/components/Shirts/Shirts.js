import "./Shirts.css";
import { Link } from "react-router-dom";

function Shirts(props) {
  const circleStyle = props.item.color;

  const borderStyle = "0.2px solid gray";
  return (
    <article className="article">
      {props.item.naPopustu && <div className="discount">Na popustu!</div>}
      <div className="overflow">
        <Link to={`/product/${props.item.id}`}>
          <img className="images" src={props.item.img} alt="shirts" />
        </Link>
      </div>
      <div className="section">
        <div className="color-circles">
          {circleStyle.map((item, index) => {
            return (
              <div
                key={index}
                className="circle"
                  style={{
                  backgroundColor: item,
                  border: item === "white" ? borderStyle : " ",
                }}
              ></div>
            );
          })}
        </div>
        <div className="shirts-title">

        <h5>{props.item.title}</h5>
        <p>{props.item.description}</p>

        <span
          className={`price-span ${props.item.naPopustu ? "price-color" : ""}`}
        >
          Od {props.item.price} RSD
        </span>
      </div>



        </div>
    </article>
  );
}

export default Shirts;
