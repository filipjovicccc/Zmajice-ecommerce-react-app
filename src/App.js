import "./App.css";
import shirts from "./components/data/data";
import Home from "./pages/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation";

function App() {
  const [items, setItems] = useState(shirts);
  const [showIsTrue, setShowIsTrue] = useState(false);

  const closeCartHandler = () => {
    setShowIsTrue(false);
  };

  const openCartHandler = () => {
    setShowIsTrue(true);
  };

  return (
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
      <Route path="/product" element={<ProductInformation />} />
    </Routes>
  );
}

export default App;
{
  /* <Header openCart={openCartHandler} />
      {showIsTrue && <Cart closeCart={closeCartHandler} />}

      <Home items={items} />

      <Footer /> */
}
