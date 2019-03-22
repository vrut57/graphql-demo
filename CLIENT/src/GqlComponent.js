import React from "react";

import { GqlCard } from "./FundCard";

export default class GqlComponent extends React.Component {
  state = {
    gqlData: []
  };

  fetchData = async () => {
      const res = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: "{funds { ticker id name desc recommendation externalApiAttrRating  }}" })
      });
      const json = await res.json();
      this.setState({
          gqlData: json
      })
  }

  render() {
    const {
      gqlData: { data: { funds = [] } = {} }
    } = this.state;
    return (
      <>
        <button onClick={() => this.fetchData()}>Fetch GraphQL Data</button>
        <button onClick={ () => this.setState({gqlData: []})}>Clear</button>
        <div>
          {funds &&
            funds.map(ele => (
              <GqlCard key={ele.id}>
                {
                  Object.entries(ele).map(field => (
                    <div>{field[0]} : {field[1]}</div>
                  ))
                }
              </GqlCard>
            ))}
        </div>
      </>
    );
  }
}
