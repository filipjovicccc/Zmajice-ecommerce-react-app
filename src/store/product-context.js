import { createContext } from "react";

export const productContext = createContext({
  items: [],
  setItems: () => {},
});
