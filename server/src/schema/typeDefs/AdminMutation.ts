import gql from 'graphql-tag'

export default gql`
    type AdminMutation {
        problems: AdminProblemsMutation!
    }

    type AdminProblemsMutation {
        create(id: String!, description: String!, testCases: [[String!]!]!): Boolean!
    }
`