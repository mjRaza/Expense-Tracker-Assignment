import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transactions }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transactions.amount > 0 ? "+" : "-";
  return (
    <div>
      <ul id="list" className="list">
        <li class={`cashLeft ${sign == "+" ? "plus" : "minus"}`}>
          {transactions.text}
          <span>
            {sign}${Math.abs(transactions.amount)}
          </span>
          <button
            className="delete-btn"
            onClick={() => deleteTransaction(transactions.id)}
          >
            x
          </button>
        </li>
      </ul>
    </div>
  );
};
