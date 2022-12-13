import "./App.css";
import shirts from "./components/data/data";
import Home from "./pages/Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation";
import { productContext } from "./store/product-context";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { CartProvider } from "react-use-cart";
import PageTwo from "./pages/PageTwo";
import Pagination from "./components/Shirts/Pagination";

function App() {
  const [items, setItems] = useState(shirts);
  const [showIsTrue, setShowIsTrue] = useState(false);
  const [bold, setBold] = useState(false);
  const filteredItemsPageTwo = items.filter((item) => item.id > 12);
  const filteredItemsHome = items.filter((item) => item.id < 13);
  const productStyle = {
    fontWeight: bold ? "bold" : "",
  };
  const filteredCategories = (category) => {
    if (category === "all") {
      setItems(shirts);
      return;
    }
    const newItems = items.filter((item) => item.category == category);
    setItems(newItems);

    setBold(!bold);
  };
  const filteredProducts = (description) => {
    const newItems = items.filter((item) => item.description == description);
    setItems(newItems);

    setBold(!bold);
  };

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

  return (
    <productContext.Provider value={value}>
      <CartProvider>
        <Router>
          <Header openCart={openCartHandler} />
          {showIsTrue && <Cart closeCart={closeCartHandler} />}
          <Routes>
            <Route
              path="page1"
              element={
                <Home
                  productStyle={productStyle}
                  filterCategories={filteredCategories}
                  filteredProducts={filteredProducts}
                  items={filteredItemsHome}
                />
              }
            />
            <Route path="product/:id" element={<ProductInformation />} />
            <Route
              path="page2"
              element={<PageTwo items={filteredItemsPageTwo} />}
            />
          </Routes>
          <Pagination />
          <Footer />
        </Router>
      </CartProvider>
    </productContext.Provider>
  );
}

export default App;
