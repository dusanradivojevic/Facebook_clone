// Context API
import React, { createContext, useContext, useReducer } from "react";

// Creating context
export const StateContext = createContext();

// Providing data layer for wrapping the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// For getting something from data layer
export const useStateValue = () => useContext(StateContext);
