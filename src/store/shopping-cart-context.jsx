import { createContext } from "react";
// The value returned by createContext is an object with two key parts:
// A React Context object, which includes:
//  1- A Provider component for passing down context values
//  2- A Consumer component (less commonly used in modern React)
// This is *not* a regular React component itself, but it provides components.
export const CartContext = createContext({
  items: [],
});
