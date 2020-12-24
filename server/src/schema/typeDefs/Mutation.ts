import gql from 'graphql-tag'

export default gql`
  type Mutation {
    login(id: String!, password: String!): String
    register(id: String!, password: String!): Boolean
    admin: AdminMutation
  }
`
