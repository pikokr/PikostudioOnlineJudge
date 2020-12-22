import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './Root'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<Root />, document.getElementById('root'))

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
