import "./Shirts.css";
import { Link } from "react-router-dom";

function Shirts(props) {
  return (
    <article className="article">
      {props.item.naPopustu && <div className="discount">Na popustu</div>}
      <div className="overflow">
      <Link to={`/product/${props.item.id}`}>
        
          <img className="images" src={props.item.img} alt="shirts" />
        </Link>
      </div>
      <div className="section">
        <h5>{props.item.title}</h5>
        <p>{props.item.description}</p>
        <span>{props.item.price}</span>
      </div>
    </article>
  );
}

export default Shirts;
