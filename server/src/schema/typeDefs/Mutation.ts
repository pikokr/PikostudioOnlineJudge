import gql from 'graphql-tag'

export default gql`
  type Mutation {
    login(id: String!, password: String!): String
  }
`
