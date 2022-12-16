import React from "react";
import "./Reclamation.css";

function Reclamation() {
  return (
    <div className="reclamation-wrapper">
      <h1 id="reclamation-header">Reklamacija</h1>
      <label htmlFor="">Email</label>
      <input type="text" />
      <label htmlFor="">Id porudžbine</label>
      <input type="text" />
      <button id="reclamation-btn">pretraži</button>
    </div>
  );
}

export default Reclamation;
