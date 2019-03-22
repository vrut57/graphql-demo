import React from "react";

import Card, { GqlCard, RestCard } from "./FundCard";

export default class fundList extends React.Component {
  state = {
    restData: {},
    gqlData: []
  };
  componentDidMount() {
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: "{funds { ticker id name desc }}" })
    })
      .then(res => res.json())
      .then(data => this.setState({ gqlData: data }));

    fetch("/fund1", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => this.setState({ restData: data }));
  }

  render() {
    const {
      restData,
      gqlData: { data: { funds = [] } = {} }
    } = this.state;
    return (
      <>
        <div>
          <div>Rest endpoint data: {restData.ticker}</div>
          <RestCard>Rest card</RestCard>
        </div>
        <div>
          {funds &&
            funds.map(ele => (
              <Card key={ele.id}>
                <div>{ele.ticker}</div>
                <div>Other info here...</div>
              </Card>
            ))}
          <GqlCard>Gql Card</GqlCard>
        </div>
      </>
    );
  }
}
