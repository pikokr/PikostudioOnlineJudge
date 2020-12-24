import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './views/Home'
import Problems from './views/Problems'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/problems"
          render={({ history }) => {
            history.push('/problems/1')
            return null
          }}
        />
        <Route exact path="/problems/:page" component={Problems} />
      </Switch>
    </Layout>
  )
}

export default App
