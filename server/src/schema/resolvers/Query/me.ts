import { IFieldResolver } from "graphql-tools";

export default (async (source, args, ctx) => {
  if (!ctx.user) return null
  return {
    user: ctx.user
  }
}) as IFieldResolver<any,any>