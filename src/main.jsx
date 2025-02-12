import React from 'react'
import ReactDOM from 'react-dom/client'
import { QBOStateProvider } from './context'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QBOStateProvider>
    <App/>
  </QBOStateProvider>
)