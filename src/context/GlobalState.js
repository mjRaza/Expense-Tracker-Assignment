import React, { createContext, useReducer } from "react";
import { Appreducer } from "../reducer/Appreducer";
export const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);

  //creating reducer here because we have dispatch here
  function deleteTransaction(transaction) {
    dispatch({ type: "DELETE_TRANSACTION", payload: transaction });
  }
  function addTransaction(id) {
    dispatch({ type: "ADD_TRANSACTION", payload: id });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
