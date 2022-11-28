import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h5>Saznaj kada stignu novi proizvodi</h5>
        <input type="text" placeholder="Unesi svoju email adresu"></input>
        <h4>Jedinstveni printovi samo za tebe</h4>
        <h3>INTERENET PRODAVNICA OUTDOOR FREAK NOVI SAD</h3>
        <h3>Bul oslobodjenja 109, Novi Sad</h3>
        <h3>MB: 66686604</h3>
        <h3>PIB: 113249966</h3>
        <p>FB SIGN</p>
      </div>

      <div className="bottom-footer">
        <h5>Prijavi reklamaciju</h5>
        <h5>Uslovi prodaje</h5>
        <h5>Povracaj i zamena</h5>
        <h5>Porucivanje i dostava</h5>
      </div>
      <p>Copyright @ 2022 Brendly</p>
    </div>
  );
}

export default Footer;
