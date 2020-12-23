"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var graphql_tag_1 = require("graphql-tag");
exports["default"] = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Mutation {\n        login(id: String!, password: String!): String\n        register(id: String!, password: String!): Boolean\n        admin: AdminMutation\n    }\n"], ["\n    type Mutation {\n        login(id: String!, password: String!): String\n        register(id: String!, password: String!): Boolean\n        admin: AdminMutation\n    }\n"])));
var templateObject_1;
