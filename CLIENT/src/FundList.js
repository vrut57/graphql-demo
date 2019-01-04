import React from "react";

export default class fundList extends React.Component {
  state = {
    restData: {},
    gqlData: []
  };
  componentDidMount() {
    console.log("component mounted");
    // fetch("http://localhost:4000/graphql", {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify({ query: "{funds { ticker }}" })
    // }).then(function(response) {
    //   console.log(response);
    // });

    fetch("/fund1", {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      //   // "Accept": "application/json",
      //   "Origin": "http://localhost:3000"
      // }
    }).then(data => this.setState({ restData: data }));
  }

  render() {
    const { restData } = this.state;
    return (
      <>
        <div>List of funds</div>
        <div>Rest endpoint data: {restData.ticker}</div>
      </>
    );
  }
}
