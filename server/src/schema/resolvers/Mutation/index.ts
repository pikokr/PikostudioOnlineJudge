import { IResolvers } from "graphql-tools"

export default {
  login: require("./login").default,
} as IResolvers
