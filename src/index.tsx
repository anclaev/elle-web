import ReactDOM from 'react-dom/client'
import React from 'react'

import './index.sass'

import App from './App'

import * as sw from './sw/serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

if (process.env.NODE_ENV === 'production') sw.register()
