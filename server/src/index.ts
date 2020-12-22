import { ApolloServer } from "apollo-server"
import config from "../config.json"
import schema from "./schema"

const server = new ApolloServer({
  schema,
})

server.listen(config.server.port, () => console.log("Listening"))
