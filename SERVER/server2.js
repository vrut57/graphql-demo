var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");
var { fundDataSrc1, fundDataSrc2, fundDataSrc3, gqlData } = require("./data.js");

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
        externalApiAttrRating: String
        recommendation: String
        ticker: String
        name: String
        desc: String
    }
`);

var getFund = function(args) {
  var id = args.id;
  return gqlData.filter(fund => {
    return fund.id === id;
  })[0];
};

var getFunds = function() {
  console.log("get funds");
  return gqlData;
};

var updateFundDesc = function({ id, desc }) {
  gqlData.map(fund => {
    if (fund.id === id) {
      fund.desc = desc;
      return fund;
    }
  });
  return gqlData.filter(fund => fund.id === id)[0];
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

  app.all("/basic-fund-data", (req, res) => {
    res.json(fundDataSrc1);
  });

  app.all("/external-api-attr", (req, res) => {
    console.log('another external');
    res.json(fundDataSrc2);
  });

  app.all("/external-recommendation", (req, res) => {
    console.log('external');
    res.json(fundDataSrc3);
  });
};
