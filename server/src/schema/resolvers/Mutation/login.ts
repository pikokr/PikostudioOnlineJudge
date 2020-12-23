import { IFieldResolver } from 'apollo-server'
import User from '../../../models/User'
import { generate } from '../../../util/password'
import jwt from 'jsonwebtoken'
import config from '../../../../config.json'

export default (async (source, { id, password }) => {
  const user = await User.findOne({ id })
  if (!user) return null
  const pw = generate(password, user.salt)
  if (pw !== user.password) return null
  return jwt.sign({ id: user.id, createdAt: Date.now() }, config.jwtSecret)
}) as IFieldResolver<any, any>
