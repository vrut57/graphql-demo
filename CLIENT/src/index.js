import React from "react";
import ReactDOM from "react-dom";
import FundList from "./FundList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>GraphQL Demo</h1>
      <FundList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
