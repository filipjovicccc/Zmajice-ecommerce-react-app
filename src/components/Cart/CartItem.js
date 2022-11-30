import "./CartItem.css";

const CartItem = (props) => {

  return (
    <li className="cart-item">
      <div>
        <h5>{props.item.title}</h5>
        <h6>{props.item.description}</h6>

        <div className="summary">
          <span className="price">{props.item.price}RSD</span>
          <span className="amount">x </span>
        </div>
        <div>
          <img className="cart-image" src={props.item.img} alt="shirts" />
        </div>
      </div>
      <div className="action">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
