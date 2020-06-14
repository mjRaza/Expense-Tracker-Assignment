import React from "react";
import "./App.css";
import Home from "./Screens/Home";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    </div>
  );
}

export default App;
