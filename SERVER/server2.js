var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");

var schema = buildSchema(`
    type Query {
        fund(id: Int!): Fund
        funds: [Fund]
    }
    type Mutation {
        updateFund(id: Int!, desc: String!): Fund
    }
    type Fund {
        id: Int
        ticker: String
        name: String
        desc: String
    }
`);

var fundData = [
  { id: 1, ticker: "APPL", name: "Apple", desc: "Apple computer company" },
  { id: 2, ticker: "GOOG", name: "Google", desc: "a" },
  { id: 3, ticker: "SNAP", name: "Snapchat", desc: "c" },
  { id: 4, ticker: "SBUX", name: "Starbucks", desc: "d" },
  { id: 5, ticker: "AMD", name: "Advanced Micro Devices", desc: "e" },
  { id: 6, ticker: "NVDA", name: "Nvidia", desc: "f" },
  { id: 7, ticker: "AMZN", name: "Amazon", desc: "g" },
  { id: 8, ticker: "TWTR", name: "Twitter", desc: "h" },
  { id: 9, ticker: "XOM", name: "Exxon", desc: "i" },
  { id: 10, ticker: "LUV", name: "Southwest Airlines", desc: "j" }
];

var getFund = function(args) {
  var id = args.id;
  return fundData.filter(fund => {
    return fund.id === id;
  })[0];
};

var getFunds = function() {
  console.log("get funds");
  return fundData;
};

var updateFundDesc = function({ id, desc }) {
  fundData.map(fund => {
    if (fund.id === id) {
      fund.desc = desc;
      return fund;
    }
  });
  return fundData.filter(fund => fund.id === id)[0];
};

var root = {
  fund: getFund,
  funds: getFunds,
  updateFund: updateFundDesc
};

module.exports = function(app) {
  app.use(
    "/graphql",
    express_graphql({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
  );

  app.all("/fund1", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.json({
      id: 1,
      ticker: "APPL",
      name: "Apple",
      desc: "Apple computer company"
    });
  });
};
