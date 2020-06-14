import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState(0);
  const [amount, setAmount] = useState(0);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <div className="transaction-heading">
        <h3>Add new transaction</h3>
      </div>

      <form onSubmit={onFormSubmit}>
        <div className="form-control input-amount">
          <label htmlFor="text">Text</label>
          <input
            className="input-box"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control ">
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
          </div>
          <input
            className="input-box"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
