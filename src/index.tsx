import ReactDOM from 'react-dom/client'
import React from 'react'

import './index.sass'

import App from './App'

import * as sw from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

sw.register()
