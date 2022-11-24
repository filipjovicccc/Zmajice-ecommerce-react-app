import "./App.css";
import Header from "./components/Layout/Header";
import shirts from "./components/data/data";
import ShirtsList from "./components/Shirts/ShirtsList";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

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
    <div className="App">
      <Header openCart={openCartHandler} />
      {showIsTrue && <Cart closeCart={closeCartHandler} />}

      <ShirtsList items={items} />
      <Footer />
    </div>
  );
}

export default App;
