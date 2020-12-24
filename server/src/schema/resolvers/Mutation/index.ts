import { IResolvers } from 'graphql-tools'
import login from './login'
import register from './register'

export default {
  login,
  register,
  admin: (source, args, context) => context.user?.admin && {},
} as IResolvers
