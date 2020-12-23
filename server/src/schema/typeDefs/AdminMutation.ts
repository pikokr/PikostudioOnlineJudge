import gql from 'graphql-tag'

export default gql`
type AdminMutation {
    problems: AdminProblems!
}

type AdminProblems {
    create(id: String!, description: String!, testCases: [[String!]!]!): Boolean!
}
`