import React from 'react'
import ReactDOM from 'react-dom/client'
import { QBOStateProvider } from './context'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QBOStateProvider>
    <App />
  </QBOStateProvider>
)