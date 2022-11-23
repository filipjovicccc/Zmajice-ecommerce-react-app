import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

// const Backdrop = (props) => {
//   return <div className="backdrop" />;
// };

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
