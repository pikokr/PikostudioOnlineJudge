import './util/log'
import { ApolloServer } from 'apollo-server'
import config from '../config.json'
import schema from './schema'
import mongoose from 'mongoose'

const server = new ApolloServer({
  schema,
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
