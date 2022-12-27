import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./BiggerModal.css"
import Header from "../Layout/Header";


const ModalOverlay = (props) => {
  return (
    <div className="big-modal">
      <div className="big-content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("big-overlay");

function BiggerModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>
        <Header />
        {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default BiggerModal;