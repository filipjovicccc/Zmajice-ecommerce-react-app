import "./Kategories.css";

function Kategories({ filterCategories }) {
  return (
    <div>
      <ul className="kategories-list">
        <h4>Kategories</h4>
        <li onClick={() => filterCategories("all")}>Sve</li>
        <li onClick={() => filterCategories("Akcija")}>Akcija</li>
        <li onClick={() => filterCategories("Horoskop")}>Horoskop</li>
        <li onClick={() => filterCategories("50")}>50 pa nagore</li>
        <li onClick={() => filterCategories("Holandjanin")}>
          Leteći Holandjanin
        </li>
        <li onClick={() => filterCategories("Kraljice")}>Kraljice</li>
        <li onClick={() => filterCategories("Legende")}>Legende</li>
        <li onClick={() => filterCategories("Oktobar")}>Oktobar</li>
        <li onClick={() => filterCategories("Patriot")}>Oktobar Patriot</li>
        <li onClick={() => filterCategories("November")}>Novembar</li>
        <li onClick={() => filterCategories("Special")}>Special</li>
        <li onClick={() => filterCategories("BBL")}>BBBL</li>
        <li onClick={() => filterCategories("Crni Petak")}>Crni Petak</li>
        <li onClick={() => filterCategories("Muška")}>Muška garderoba</li>
        <li onClick={() => filterCategories("Ženska")}>Ženska garederoba</li>
      </ul>
    </div>
  );
}

export default Kategories;
