import "./App.css";
import Header from "./components/Layout/Header";
import shirts from "./components/data/data";
import ShirtsList from "./components/Shirts/ShirtsList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(shirts);
  return (
    <div className="App">
      <Header />
      <ShirtsList items={items} />
    </div>
  );
}

export default App;
