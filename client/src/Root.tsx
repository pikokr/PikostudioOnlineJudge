import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import apollo from './apollo'

const Root: React.FC = () => {
  return (
    <ApolloProvider client={apollo}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default Root
