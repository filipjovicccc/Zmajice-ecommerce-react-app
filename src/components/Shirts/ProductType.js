import React from "react";
import "./ProductType.css";


function ProductType({ items, filteredProducts }) {

  const filteredProductsType = items.map(item => item === item.description)
  console.log(filteredProductsType)
  return (
    <div className="products">
      <ul className="product-list">
        <h4> Tip proizvoda</h4>
        <li
         
         onClick={() => filteredProducts("Muška majica")}
       >
         Muška majica
       </li>
       <li
 
         onClick={() => filteredProducts("Ženska majica")}
       >
         Ženstka majica
       </li>
       <li
      
         onClick={() => filteredProducts("Dečija majica - unisex")}
       >
         Dečija majica - unisex unisex
       </li>
       <li
   
         onClick={() => filteredProducts("Duks - unisex")}
       >
        Duks - unisex
       </li>
       <li
      
         onClick={() => filteredProducts("Duks premium")}
       >
        Duks premium
       </li>
       <li
     
         onClick={() => filteredProducts("Duks premium - unisex")}
       >
        Duks premium - unisex
       </li>
       <li
     
         onClick={() => filteredProducts("Bebi bodi kratak rukav")}
       >
         Bebi bodi kratak rukav
       </li>
       <li
        
         onClick={() => filteredProducts("Bebi bodi dug rukav")}
       >
         Bebi bodi dug rukav
       </li>
       <li
       
         onClick={() => filteredProducts("Portikla")}
       >
         Portikla
       </li>
       <li
     
         onClick={() => filteredProducts("Šolja")}
       >
         Šolja
       </li>
      
       
      
   
      </ul>
    </div>
  );
}

export default ProductType;
