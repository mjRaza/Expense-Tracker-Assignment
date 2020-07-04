import React from "react";
import { Balance } from "../conponents/Balance";
import { Income } from "../conponents/Income";
import { TransactionList } from "../conponents/TransactionList";
import { AddTransaction } from "../conponents/AddTransaction";
const Home = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Expense Tracker </h2>
      </div>
      <Balance />
      <Income />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default Home;
