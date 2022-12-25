import React from "react";
import "./Reclamation.css";

function Reclamation() {
  return (
    <div className="reclamation-wrapper">
      <h1 id="reclamation-header">Reklamacija</h1>
      {/* <label className="reclamation-label" htmlFor="">
        Email
      </label> */}
      <input placeholder="Email" type="text" />
      [{/* <label className="reclamation-label" htmlFor="">
        Id porudžbine
      </label> */}]
      <input placeholder="Id porudžbine" type="text" />
      <button id="reclamation-btn">pretraži</button>
    </div>
  );
}

export default Reclamation;
