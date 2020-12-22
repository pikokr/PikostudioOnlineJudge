import { ApolloError, IFieldResolver } from 'apollo-server'
import User from '../../../models/User'
import crypto from 'crypto'
import { generate } from '../../../util/password'

export default (async (source, { id, password }) => {
  let user = await User.findOne({ id })
  if (user) throw new ApolloError('유저가 이미 존재합니다')
  user = new User()
  user.id = id
  user.salt = crypto.randomBytes(16).toString('base64')
  user.password = generate(user.salt, password)
  await user.save()
  return true
}) as IFieldResolver<any, any>
