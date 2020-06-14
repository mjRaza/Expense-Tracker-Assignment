import React from "react";
import Headers from "../conponents/Headers";
import { Balance } from "../conponents/Balance";
import { Income } from "../conponents/Income";
import { TransactionList } from "../conponents/TransactionList";
import { AddTransaction } from "../conponents/AddTransaction";
const Home = () => {
  return (
    <div className="container">
      <Headers />
      <Balance />
      <Income />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default Home;
