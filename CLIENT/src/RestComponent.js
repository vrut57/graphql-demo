import React from "react";

import { RestCard } from "./FundCard";

export default class fundList extends React.Component {
  state = {
    restData: []
  };

  fetchExternal = async (endpoint) => {
    const { restData } = this.state;
    const res = await fetch(endpoint, {method: "GET"});
    const json = await res.json();
    if(restData.length) {
      const newData = restData.map((ele, i) => ({...ele, ...json[i] }))
      this.setState({
        restData: newData
      })
    } else {
      this.setState({
        restData: json
      })
    }
  }

  render() {
    const {
      restData
    } = this.state;
    return (
      <>
      <button onClick={()=> this.fetchExternal('/basic-fund-data')}>Fetch Basic Data</button>
      <button onClick={() => this.fetchExternal('/external-api-attr')}>Get More Data</button>
      <button onClick={() => this.fetchExternal('/external-recommendation')}>Get MORE data</button>
      <button onClick={() => this.setState({restData: []})}>Clear</button>
        <div>
          {
            restData.map(ele => (
              <RestCard>
                {
                  Object.entries(ele).map(field => (
                    <div>{field[0]} : {field[1]}</div>
                  ))
                }
              </RestCard>
            ))
          }
        </div>
      </>
    );
  }
}
