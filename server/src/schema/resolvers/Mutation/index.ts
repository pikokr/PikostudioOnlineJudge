import { IResolvers } from 'graphql-tools'
import login from './login'
import register from './register'

export default {
  login,
  register,
} as IResolvers
