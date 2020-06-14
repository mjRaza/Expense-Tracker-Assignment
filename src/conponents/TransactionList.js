import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <div className="transaction-heading">
        <h3>History</h3>
        {transactions.map((transactions) => (
          <Transaction key={transactions.id} transactions={transactions} />
        ))}
      </div>
    </div>
  );
};
