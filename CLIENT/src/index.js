import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { GqlContainer, RestContainer } from './containers'
import FundList from "./FundList";
import GqlComponent from './GqlComponent';
import RestComponent from './RestComponent';

function App() {
  return (
    <>
      <h1>GraphQL Demo</h1>
      <div className="comparison-container">
      <GqlContainer>
        <GqlComponent />
      </GqlContainer>
      <RestContainer>
        <RestComponent />
      </RestContainer>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
