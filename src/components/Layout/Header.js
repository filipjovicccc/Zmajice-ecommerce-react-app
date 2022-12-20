import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import HeartLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  const iconStyle = { fontSize: "1.8em" };
  return (
    <div className="header">
      <div className="left-header">
        <Link to={"/page1"}>
          <img className="header-image" src={HeartLogo} alt="" />
        </Link>
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
