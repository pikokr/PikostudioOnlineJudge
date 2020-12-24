import { IResolvers } from 'graphql-tools'
import Query from './Query'
import Mutation from './Mutation'
import AdminMutation from './AdminMutation'
import AdminProblemsMutation from './AdminProblemsMutation'

export default {
  Query,
  Mutation,
  AdminMutation,
  AdminProblemsMutation,
} as IResolvers
