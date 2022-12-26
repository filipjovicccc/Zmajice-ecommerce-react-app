import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaFilter} from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";
import "./Header.css";
import HeartLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  const iconStyle = { fontSize: "1.8em" };
  const smallIconStyle = {fontSize: "0.9em"}
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
       <div className="sorting">
        <div className="semi-sorting">
        <TiArrowUnsorted />
          <p>Sortiraj</p>
        </div>
        <div className="semi-sorting">
        <FaFilter style={smallIconStyle} />
         <p>Filtriraj</p>
        </div>
       </div>
    </div>
  );
}

export default Header;
