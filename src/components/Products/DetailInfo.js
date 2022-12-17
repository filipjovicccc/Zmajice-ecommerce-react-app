import React from "react";
import "./DetailInfo.css";

function DetailInfo() {
  return (
    <div>
      <div className="detail-wrapper">
        <div className="detail-box">
          <h3>Muška majica</h3>
          <ul>
            <li>
              100% pamuk, Sing Umbro 160g/m2 - pamuk visokog
              <br />
              kvaliteta
            </li>
            <li>Standardne veličine i ravan kroj</li>
            <li>
              Direktna digitalna štampa (DTG) - najsavremenija <br />
              tehnika štampe
            </li>
            <li>Proizvedeno u Srbiji</li>
          </ul>
        </div>
        <div className="detail-box center">
          <h1>MUŠKA MAJICA</h1>
          <table>
            <tr>
              <th></th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>XXL</th>
              <th>3XL</th>
            </tr>
            <tr>
              <td>ŠIRINA</td>
              <td>50</td>
              <td>52</td>
              <td>54</td>
              <td>57</td>
              <td>60</td>
              <td>62</td>
              <td>64</td>
            </tr>
            <tr>
              <td>DUŽINA</td>
              <td>67</td>
              <td>69</td>
              <td>72</td>
              <td>74</td>
              <td>76</td>
              <td>78</td>
              <td>80</td>
            </tr>
          </table>
        </div>
        <div className="detail-box">
          <h3>Upustvo za održanje proizvoda</h3>
          <p>
            Proizvod prati izvrnut na temperaturi ne većoj od 40 stepeni <br />
            celzijusa, kako bi se osigurali da neće doći do oštećenja printa.
            <br />
            <br />
            Proizvod peglati izvrnut, kako bi se osigurali da neće doći do
            oštećenja printa. <br />
            Moguće sakupljanje proizvoda usled pranja do 2-3%
          </p>
        </div>
        <div className="detail-box"></div>
      </div>
    </div>
  );
}

export default DetailInfo;
