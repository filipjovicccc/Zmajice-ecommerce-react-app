import React from "react";
import { Fragment } from "react";
import { BiPlus } from "react-icons/bi";
import { useCart } from "react-use-cart";
import DetailInfo from "./DetailInfo";
import "./Product.css";

function Products(props) {
  const { addItem } = useCart();

  const circleStyle = props.color;
  const borderStyle = "0.2px solid gray";
  const plusStyle = { fontWeight: "800", fontSize: "2.3em" };
  return (
    <Fragment>
      <div className="product">
        <div className="overflow">
          <img className="product-image" src={props.img} alt="shirts" />
        </div>
        <div className="product-information">
          <h1 id="product-header">{props.title}</h1>
          <p id="product-id">#{props.id}</p>
          <h4 className="price-font">{props.price}RSD</h4>
          {/* <h5 className="product-font">{props.desc}</h5> */}
          {/* {props.quantity} */}
          <div>
            <h5 className="product-font">BOJA</h5>

            <div id="product-circle" className="color-circles">
              {circleStyle.map((item, index) => {
                return (
                  <div
                    key={index}
                    id="small-circle"
                    className="circle"
                    style={{
                      backgroundColor: item,
                      border: item === "white" ? borderStyle : " ",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div>
            <h5 className="product-font">VELIČINA </h5>
            <span className="product-size">Kako odabrati veličinu?</span>
            <div className="product-wraper">
              <div className="product-box">XS</div>
              <div className="product-box">S</div>
              <div className="product-box">M</div>
              <div className="product-box">L</div>
              <div className="product-box">XL</div>
              <div className="product-box">2XL</div>
              <div className="product-box">3XL</div>
            </div>
            <button
              onClick={() => addItem(props.item, props.quantity + 1)}
              className="product-button"
            >
              DODAJ U KORPU
            </button>
          </div>
        </div>
      </div>

      <section className="bottom-info">
        <div className="more-info">
          <h4>Informacije o proizvodu</h4>
          <BiPlus style={plusStyle} />
        </div>
        <div className="more-info">
          <h4>Dostava</h4>
          <BiPlus style={plusStyle} />
        </div>
        <div className="more-info">
          <h4>Reklamacije</h4>
          <BiPlus style={plusStyle} />
        </div>
      </section>
    </Fragment>
  );
}

export default Products;
