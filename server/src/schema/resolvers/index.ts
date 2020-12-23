import { IResolvers } from 'graphql-tools'
import Query from './Query'
import Mutation from './Mutation'
import AdminMutation from './AdminMutation'

export default {
  Query,
  Mutation,
  AdminMutation
} as IResolvers
