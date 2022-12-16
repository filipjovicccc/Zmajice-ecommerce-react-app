import "./Kategories.css";

function Kategories({ filterCategories }) {
  return (
    <div>
      <ul className="kategories-list">
        <h4>Kategories</h4>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("all")}
        >
          Sve
        </li>
        <li
          // style={productStyle}
          onClick={() => filterCategories("Akcija")}
        >
          Akcija
        </li>
        <li
          // style={productStyle}
          onClick={() => filterCategories("Horoskop")}
        >
          Horoskop
        </li>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("50")}
        >
          50 pa nagore
        </li>
        <li
          // style={productStyle}
          onClick={() => filterCategories("Holandjanin")}
        >
          Leteći Holandjanin
        </li>
        <li
          // style={productStyle}
          onClick={() => filterCategories("Kraljice")}
        >
          Kraljice
        </li>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("Legende")}
        >
          Legende
        </li>
        <li
          // style={productStyle}
          onClick={() => filterCategories("Oktobar")}
        >
          Oktobar
        </li>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("Patriot")}
        >
          Oktobar Patriot
        </li>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("November")}
        >
          Novembar
        </li>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("Special")}
        >
          Special
        </li>
        <li
          // style={productStyle}
          onClick={() => filterCategories("BBL")}
        >
          BBBL
        </li>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("Crni Petak")}
        >
          Crni Petak
        </li>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("Muška")}
        >
          Muška garderoba
        </li>
        <li
          //  style={productStyle}
          onClick={() => filterCategories("Ženska")}
        >
          Ženska garederoba
        </li>
      </ul>
    </div>
  );
}

export default Kategories;
