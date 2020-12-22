import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './views/Home'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Layout>
  )
}

export default App
