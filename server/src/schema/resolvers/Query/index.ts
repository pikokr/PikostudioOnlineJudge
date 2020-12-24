import { IResolvers } from 'graphql-tools'
import me from './me'
import problems from './problems'

export default {
  me,
  problems
} as IResolvers
