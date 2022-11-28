import "./App.css";
import shirts from "./components/data/data";
import Home from "./pages/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation";
import { productContext } from "./store/product-context";
import CartProvider from "./store/CartProvider";

function App() {
  const [items, setItems] = useState(shirts);

  const [showIsTrue, setShowIsTrue] = useState(false);

  const closeCartHandler = () => {
    setShowIsTrue(false);
  };

  const openCartHandler = () => {
    setShowIsTrue(true);
  };

  // const addToCartHandler = (items) => {
  //   setItems((prevItems) => {
  //     return [items, ...prevItems];
  //   });
  // };

  const value = {
    items,
    setItems,
  };

  return (
    <CartProvider>
      <productContext.Provider value={value}>
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
                // onAddToCart={addToCartHandler}
              />
            }
          />
          <Route path="product/:id" element={<ProductInformation />} />
        </Routes>
      </productContext.Provider>
    </CartProvider>
  );
}

export default App;
{
  /* <Header openCart={openCartHandler} />
      {showIsTrue && <Cart closeCart={closeCartHandler} />}

      <Home items={items} />

      <Footer /> */
}
