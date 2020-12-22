import { IFieldResolver } from 'apollo-server'
import User from '../../../models/User'
import { generate } from '../../../util/password'
import jwt from 'jsonwebtoken'
import config from '../../../../config.json'

export default (async (source, { id, password }) => {
  const user = await User.findOne({ id })
  if (!user) return null
  const pw = generate(password, user.salt)
  const pw2 = generate(user.password, user.salt)
  if (pw !== pw2) return null
  return jwt.sign(user.id, config.jwtSecret)
}) as IFieldResolver<any, any>
