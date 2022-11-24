import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

function Header(props) {
  const iconStyle = { fontSize: "1.8em" };
  return (
    <div className="header">
      <div className="left-header">
        <p>Heart Symol</p>

        <p>Prodavnica</p>
      </div>
      <div className="right-header">
        <input placeholder="Pretraži" type="text" />
        <AiOutlineSearch style={iconStyle} />
        <FaShoppingCart onClick={props.openCart} style={iconStyle} />
      </div>
    </div>
  );
}

export default Header;
