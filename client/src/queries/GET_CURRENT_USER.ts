import { gql } from '@apollo/client'

export default gql`
query {
    me {
        user {
            id
        }
    }
}
`