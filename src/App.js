import "./App.css";
import shirts from "./components/data/data";
import Home from "./pages/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation";
import { productContext } from "./store/product-context";
// import CartProvider from "./store/CartProvider";
import CartContext from "./store/cart-context";
import { CartProvider } from "react-use-cart";

function App() {
  const [items, setItems] = useState(shirts);
  const [products, setProducts] = useState([]);

  const [showIsTrue, setShowIsTrue] = useState(false);

  const closeCartHandler = () => {
    setShowIsTrue(false);
  };

  const openCartHandler = () => {
    setShowIsTrue(true);
  };

  const value = {
    items,
    setItems,
  };
  const cartValue = {
    products,
    setProducts,
  };

  return (
    <CartContext.Provider value={cartValue}>
      <productContext.Provider value={value}>
        <CartProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  items={items}
                  showIsTrue={showIsTrue}
                  setShowIsTrue={setShowIsTrue}
                  closeCartHandler={closeCartHandler}
                  openCartHandler={openCartHandler}
                />
              }
            />
            <Route path="product/:id" element={<ProductInformation />} />
          </Routes>
        </CartProvider>
      </productContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
