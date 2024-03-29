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
import Reclamation from "./pages/Reclamation";
import Sorting from "./components/Layout/Sorting";

function App() {
  const [items, setItems] = useState(shirts);
  const [showIsTrue, setShowIsTrue] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false)
  const filteredItemsPageTwo = items.filter((item) => item.id > 12);
  const filteredItemsHome = items.filter((item) => item.id < 13);


  const filteredCategories = (category) => {
    let filteredItems = [];
    if (category === "all") {
      filteredItems = shirts;
    } else {
      filteredItems = shirts.filter((item) => item.category === category);
    }
    setItems(filteredItems);
  };

  // const filteredProducts = (description) => {
  //   const copyItems = [...items]
  //   const newFilterItems = copyItems.filter((item) => item.description === description);
  //   setItems(newFilterItems);

  // };

  const filteredProducts = (description) => {

      let filteredProductsItems = [];

      filteredProductsItems = shirts.filter((item) => item.description === description );

      setItems(filteredProductsItems)

        
  }

  const closeCartHandler = () => {
    setShowIsTrue(false);
  };

  const openCartHandler = () => {
    setShowIsTrue(true);
  };

  const openFilterModalHandler = () => {
    setShowFilterModal(true);
  }
 
  const closeFilterModalHandler = () => {
    setShowFilterModal(false);
  }

  const value = {
    items,
    setItems,
  };

  return (
    <productContext.Provider value={value}>
      <CartProvider>
        <Router>
          <Header
          closeFilterModal={closeFilterModalHandler}
          showFilterModal={showFilterModal}
           openCart={openCartHandler}
          openFilterModal = {openFilterModalHandler} />
         {showIsTrue && <Cart closeCart={closeCartHandler} />} 
          {showFilterModal && <Sorting  
            closeFilterModal={closeFilterModalHandler} />}
          <Routes>
            <Route
              path="page1"
              element={
                <Home
                  filterCategories={filteredCategories}
                  filteredProducts={filteredProducts}
                  items={filteredItemsHome}
                />
              }
            />
            <Route path="reclamation" element={<Reclamation />}></Route>
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
