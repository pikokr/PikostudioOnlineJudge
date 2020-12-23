import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://test.pikodev.me:1234'
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})