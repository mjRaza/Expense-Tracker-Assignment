import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((trams) => trams.amount);
  console.log(amount);

  const total = amount.reduce((acc, item) => acc + item, 0).toFixed(2);
  return (
    <div className="bal">
      <h4>You Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
};
