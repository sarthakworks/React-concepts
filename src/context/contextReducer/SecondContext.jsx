import React, { createContext, useState, useReducer } from "react";
import SecondReducer from "./SecondReducer";
const SecondContext = createContext();
export const SecondProvider = ({ children }) => {
  const initialState = {
    count: 1,
  };
  const [state, dispatch] = useReducer(SecondReducer, initialState);
  const value = { state, dispatch };
  return (
    <SecondContext.Provider value={value}>{children}</SecondContext.Provider>
  );
};

export default SecondContext;
