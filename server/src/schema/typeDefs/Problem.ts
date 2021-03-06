import gql from 'graphql-tag'

export default gql`
  type Problem {
    id: String!
    examples: [IO!]!
    title: String!
  }
  type IO {
    input: String!
    output: String!
  }
`
