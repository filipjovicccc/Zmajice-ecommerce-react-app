import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h5>Saznaj kada stignu novi proizvodi</h5>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>

        <p>
          Jedinstveni printovi samo za tebe
          <br />
          <br />
          INTERENET PRODAVNICA OUTDOOR FREAK NOVI SAD <br />
          Bul oslobodjenja 109, Novi Sad
          <br /> MB: 66686604 <br />
          PIB: 113249966 FB SIGN
        </p>
      </div>

      <div className="bottom-footer">
        <span className="span">
          {" "}
          Prijavi reklamaciju <span />
          <span className="span"> Uslovi prodaje</span>
          <span className="span"> Povracaj i zamena</span>
          <span className="span">Porucivanje i dostava</span>
        </span>
      </div>
      <p>Copyright @ 2022 Brendly</p>
    </div>
  );
}

export default Footer;
