import gql from 'graphql-tag'

export default gql`
  type Query {
    me: Me
    problems: [Problem!]!
  }
`
