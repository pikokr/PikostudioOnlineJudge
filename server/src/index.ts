import './util/log'
import { ApolloServer } from 'apollo-server'
import config from '../config.json'
import schema from './schema'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const server = new ApolloServer({
  schema,
  context: ctx => {
    let user = null
    if (ctx.req.headers.authorization) {
      let token = ctx.req.headers.authorization
      if (token.startsWith('Bearer ')) {
        token = ctx.req.headers.authorization.slice('Bearer '.length)
        try {
          user = jwt.verify(token, config.jwtSecret)
          console.log(user)
        } catch (e) {
          user = null
        }
      }
    }

    return { user }
  },
})

mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('database connected.')
    server.listen(config.server.port, () => console.log('Listening'))
  })
