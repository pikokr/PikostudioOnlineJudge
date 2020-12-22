import { IFieldResolver } from 'apollo-server'
import User from '../../../models/User'
import { generate } from '../../../util/password'
import jwt from 'jsonwebtoken'
import config from '../../../../config.json'

export default (async (source, { id, password }) => {
  const user = await User.findOne({ id })
  console.log(1)
  if (!user) return null
  const pw = generate(password, user.salt)
  console.log(2)
  if (pw !== user.password) return null
  console.log(3)
  return jwt.sign(user.id, config.jwtSecret)
}) as IFieldResolver<any, any>
