import React from "react";
import "./Footer.css";
import { useState } from "react";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const [toggleInput, setToggleInput] = useState(false);

  const toggleInputValidation = () => {
    setToggleInput(true);
  };
  const iconStyle = { fontSize: "1.1em" };

  return (
    <div className="footer">
      <div>
        <h5>Saznaj kada stignu novi proizvodi</h5>
        <form className="footer-form">
          <input
            onMouseOut={toggleInputValidation}
            type="text"
            className={"footer-input"}
            placeholder="Unesi svoju email adresu"
          />
          <button className="footer-btn" type="submit">
            Prijavi se
          </button>
          <div
            className="input-validation"
            style={{ display: toggleInput ? "block" : "none" }}
          >
            <p>Morate uneti e mail adresu</p>
          </div>
        </form>

        <div className="footer-middle">
          <br />
          <p>
            Jedinstveni printovi samo za tebe
            <br />
            <br />
            INTERENET PRODAVNICA OUTDOOR FREAK NOVI SAD <br />
            Bul oslobodjenja 109, Novi Sad
            <br /> MB: 66686604 <br />
            PIB: 113249966 <br />
          </p>
        </div>
        <MdFacebook style={iconStyle} />
      </div>

      <div className="bottom-footer">
        <ul className="footer-list">
          <li>
            <Link to={"/reclamation"}>Prijavi reklamaciju</Link>
          </li>
          <li>
            <Link>Uslovi prodaje</Link>
          </li>
          <li>
            <Link>Povraćaj i zamena</Link>
          </li>
          <li>
            <Link>Poručivanje i dostava</Link>
          </li>
        </ul>
      </div>
      <div id="copyright">
        <p>Copyright @ 2022 Brendly</p>
      </div>
    </div>
  );
}

export default Footer;
