import "./App.css";
import shirts from "./components/data/data";
import Home from "./pages/Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation";
import { productContext } from "./store/product-context";
import CartContext from "./store/cart-context";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

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
          <Router>
            <Header openCart={openCartHandler} />
            {showIsTrue && <Cart closeCart={closeCartHandler} />}
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
            <Footer />
          </Router>
        </CartProvider>
      </productContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
