import React, { createContext, useContext, useReducer } from "react";
 //Ensuring that Every Component gets access to Data Layer
// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    //InitialState-How does the initial State look at the starting?
    //Reducer-Manipulation taking place under DataLayer.How are we able to dispatch this action in the data layer.
   // Reducer playes a very important role in Pushing data in the Data Layer
   //Reducer listens to the actions.
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

