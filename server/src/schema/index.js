"use strict";
exports.__esModule = true;
var graphql_tools_1 = require("graphql-tools");
var typeDefs_1 = require("./typeDefs");
var resolvers_1 = require("./resolvers");
exports["default"] = graphql_tools_1.makeExecutableSchema({
    typeDefs: typeDefs_1["default"],
    resolvers: resolvers_1["default"]
});
