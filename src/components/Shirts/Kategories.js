import React from "react";
import "./Kategories.css";

function Kategories({ filterCategories }) {
  return (
    <div>
      Kategories
      <ul className="kategories-list">
        <li>Sve</li>
        <li>Akcija</li>
        <li>Horoskop</li>
        <li>50 pa nagore</li>
        <li>Leteći Holandjanin</li>
        <li onClick={() => filterCategories("Kraljice")}>Kraljice</li>
        <li>Legende</li>
        <li>Oktobar</li>
        <li>Oktobar Patriot</li>
        <li onClick={() => filterCategories("November")}>Novembar</li>
        <li onClick={() => filterCategories("Special")}>Special</li>
        <li>BBBL</li>
        <li onClick={() => filterCategories("Crni Petak")}>Crni Petak</li>
        {/* <button onClick={() => filterCategories("Muška")}> MuŠKA </button> */}
        <li onClick={() => filterCategories("Muška")}>Muška garderoba</li>
        <li>Ženska garederoba</li>
      </ul>
    </div>
  );
}

export default Kategories;
