import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

import App from './App'

import * as sw from './serviceWorkerRegistration'
import store from './store'

import './index.sass'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

sw.register()
